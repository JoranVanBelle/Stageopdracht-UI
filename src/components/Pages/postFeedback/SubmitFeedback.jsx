import { useState, useEffect } from "react";
import { useFormContext } from 'react-hook-form';
import { MdCheckCircle } from "react-icons/md"

export default function   SubmitFeedback() {

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  }

  const {
    isSubmitting,
  } = useFormContext();

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return(
    <div >
      <button type="submit" style={{textDecoration: "underline", color: "darkgray"}} onClick={handleClick} disabled={isSubmitting}>
        <MdCheckCircle style={{color: "black", fontSize: "26px"}} />
      </button>
    </div>
  );
}