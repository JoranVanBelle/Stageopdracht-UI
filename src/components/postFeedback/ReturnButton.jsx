import { useNavigate } from "react-router";
import { useFormContext } from 'react-hook-form';

export default function ReturnButton() {

  const navigate = useNavigate();

  const {
    isSubmitting,
  } = useFormContext();

  const handleClick = () => {
    navigate("/location", { replace: true });
  }
  return(
    <div >
      <button type="submit" style={{textDecoration: "underline", color: "darkgray"}} onClick={handleClick} disabled={isSubmitting}>
        Cancel feedback
      </button>
    </div>
  );
}