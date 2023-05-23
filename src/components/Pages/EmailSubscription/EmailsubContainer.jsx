import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FormProvider, useForm } from 'react-hook-form';
import * as subApi from "../../../api/subscription";
import { BiUser } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import SubmitFeedback from "../postFeedback/SubmitFeedback";
import ReturnButton from "../postFeedback/ReturnButton";
import LocationInputField from "../../Inputfields/LocationInputfield";
import FeedbackPopup from "../postFeedback/FeedbackPopup";
import EmailInputField from "../../Inputfields/EmailInputField";
import { UserContext } from "../../../contexts/User.context";

export default function EmailsubContainer() {

  const { location } = useParams();
  const navigate = useNavigate();
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const timeout = 5000;
  const [showPopup, setShowPopup] = useState(false);
  const [colorPopup, setColorPopup] = useState("128, 0,0");
  const { emailaddress } = useContext(UserContext);

  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await subApi.subscribe({
        "subscription": {
          "Location": sessionStorage.getItem("currentLocation"),
          "Username": emailaddress
        }
      });
      setColorPopup("0,128,0")
      setShowPopup(true);
      await delay(timeout);
      navigate(-1);
    } catch (err) {
      console.err("Error caught: " + err)
      setColorPopup("128, 0,0")
    } finally {
      setShowPopup(false);
    }
  };

  return(
<div style={{display: "grid", gridTemplateRows: "auto auto auto", height: "100vh", width: "100vw"}}>
      <div style={{display: `${showPopup ? "block" : "none"}`}}>
        {showPopup ? <FeedbackPopup timeout={timeout} startPopup={true} colorPopup={colorPopup} text={`subscribed to ${location}`} /> : null}
      </div>
      <header style={{border: `${showPopup ? "none" : "1px solid darkgray"}`, margin: "5%", borderRadius: "10px"}}>
      <h1 style={{fontSize: "30px", textAlign: "center", alignSelf: "center", display: `${showPopup ? "none" : "block"}`}}>Subscription for {location}</h1>
      <div style={{textAlign: "center", padding: "0 5%", display: `${showPopup ? "none" : "block"}`}}>After you subscribed to {location}, you will receive emails every time the weather is good at {location}. 
      You will be able to unsubscribe the moment you get your first email of this location. </div>
      </header>
      <FormProvider
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        isSubmitting={isSubmitting}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mb-3" style={{display: `${showPopup ? "none" : "block"}`, border: "1px solid darkgray", margin: "5% 5% 0 5%", borderRadius: "10px"}}>
          <div style={{marginLeft: "3%", marginTop: "5%"}}>
            <EmailInputField label={<BiUser />} email={emailaddress} name={"Email"} />
            <LocationInputField label={<GoLocation />} location={location} name={"Location"} />
          </div>
          <div style={{display: "flex", justifyContent: "space-around", marginTop: "10vh", paddingBottom: "0"}}>
            <SubmitFeedback />
            <ReturnButton />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}