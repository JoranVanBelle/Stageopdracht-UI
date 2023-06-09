import { Slider } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { BiHappyBeaming,BiSad } from "react-icons/bi";

export default function SliderFeedback({arealabel}) {

  const {
    isSubmitting, register
  } = useFormContext();

  return(
    <>
      <BiSad style={{margin: "0 10px"}}/>
      <Slider style={{width: "50%", height: "25%", paddingTop: "0px"}}
      aria-label={arealabel}
      {...register(arealabel)}
      defaultValue={3}
      getAriaValueText={e => e}
      valueLabelDisplay="auto"
      step={1}
      marks
      min={1}
      max={5}
      disabled={isSubmitting}
    />
    <BiHappyBeaming style={{marginLeft: "10px"}}/>
    </>
  );
}