import { useParams, useNavigate } from "react-router";
import * as subApi from "../../../api/subscription";
import { FormProvider, useForm } from 'react-hook-form';
import LocationInputField from "../../Inputfields/LocationInputfield";
import EmailInputField from "../../Inputfields/EmailInputField";

export default function EmailSignoutContainer() {

  const { email, location } = useParams();
  const navigate = useNavigate();

  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await subApi.signout({
        "signout": {
          "Location": location,
          "Username": email
        }
      })
      navigate("/goodbye", {replace: true});
    } catch (err) {
      console.err("Error caught: " + err)
    }
  };

  return(
    <div style={{height: "100%"}}>
      <FormProvider
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        isSubmitting={isSubmitting}
      >
        <form onSubmit={handleSubmit(onSubmit)} >
          <div style={{display: "flex", flexDirection: "column"}}>
            <h1 style={{textAlign: "center"}}>Unsubscribe from emails about the weather in {location}</h1>
            <p style={{textAlign: "center"}}><input type="checkbox" required /> Are you sure you want to unsub from emails of {location}?</p>
            <LocationInputField label={"location"} location={location} name={"Location"} />
            <EmailInputField label={"Email"} email={email} name={"Email"} />
            <button type="submit" style={{border: "1px solid black", borderRadius: "10px", justifySelf: "center", margin: "20% 40%"}}>Confirm</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}