import SliderFeedback from "./Slider";
import { BsWind, BsTsunami, BsSun, BsCloudRain, BsCloudFog } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SubmitFeedback from "./SubmitFeedback";
import ReturnButton from "./ReturnButton";
import InputField from "./Inputfield";
import { FormProvider, useForm } from 'react-hook-form';
import * as feedbackApi from "../../api/feedback";
import LocationInputField from "./LocationInputfield";
import FeedbackPopup from "./FeedbackPopup";

export default function PostFeedbackScreen() {

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const timeout = 5000;
  const [anonymousNames, setAnonymousNames] = useState(["AnonymousSeal", "FishyFriend", "ShyShrimp", "FlipperFan"]);
  const [location, setLocation] = useState("neverland");
  const [showPopup, setShowPopup] = useState(false);
  const [colorPopup, setColorPopup] = useState("128, 0,0");

  const navigate = useNavigate();

  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      Username, Sun, Rain, Fog, Windspeed, Waveheight, Winddirection
    } = data;

    try {
      await feedbackApi.postFeedback({
        Location: sessionStorage.getItem("currentLocation"),
        Username: !Username ? anonymousNames[Math.floor(Math.random() * anonymousNames.length)] : Username,
        Comment: `${Sun}/5\n${Rain}/5\n${Fog}/5\n${Windspeed}/5\n${Waveheight}/5\n${Winddirection}/5`,
        date: Date.now(),
      });
      setColorPopup("0,128,0")
      setShowPopup(true);
      await delay(timeout);
      navigate(-1);
      setShowPopup(false);
    } catch (err) {
      console.log("Error caught: " + err)
      setColorPopup("128, 0,0")
    }
  };

  useEffect(() => {
    const temp = sessionStorage.getItem("currentLocation");
    if(temp === "undefined" || temp ===null) {
      setLocation("Neverland");
    } else {
      setLocation(temp)
    }
  }, [])

  return (
    <div style={{}}>
      <div style={{display: "block"}}>
        {showPopup ? <FeedbackPopup timeout={timeout} startPopup={true} colorPopup={colorPopup} /> : null}
      </div>
      <h1 style={{fontSize: "30px", textAlign: "center"}}>Feedback for {location}</h1>
      <FormProvider
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        isSubmitting={isSubmitting}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mb-3" style={{display: `${showPopup ? "none" : "block"}`}}>
          <div style={{marginLeft: "3%"}}>
            <InputField label={<BiUser />} placeholder={"Optional username..."} name={"Username"} minLenght={0} maxLength={15} />
            <LocationInputField label={<GoLocation />} location={location} name={"Location"} />
            <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <p> <BsSun />: <SliderFeedback arealabel={"Sun"} /> </p>
              <p> <BsCloudRain />: <SliderFeedback arealabel={"Rain"} /> </p>
              <p> <BsCloudFog />: <SliderFeedback arealabel={"Fog"} /> </p>
              <p> <BsWind />: <SliderFeedback arealabel={"Windspeed"} /> </p>
              <p> <BsTsunami />: <SliderFeedback arealabel={"Waveheight"} /> </p>
              <p> <AiOutlineCompass />: <SliderFeedback arealabel={"Winddirection"} /> </p>
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", padding: "0 5%"}}>
          <SubmitFeedback />
          <ReturnButton />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}