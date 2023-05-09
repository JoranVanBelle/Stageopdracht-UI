import { useNavigate } from "react-router";
import { useFormContext } from 'react-hook-form';
import { MdCancel } from "react-icons/md"

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
      <button type="button" style={{textDecoration: "underline", color: "darkgray"}} onClick={handleClick} disabled={isSubmitting}>
        <MdCancel style={{color: "black", fontSize: "26px"}} />
      </button>
    </div>
  );
}