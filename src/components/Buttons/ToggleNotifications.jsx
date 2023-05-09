import { Switch } from '@mui/material';

export default function ToggleNotifications({label, handleOnchange}) {
  return(
    <div style={{display: "grid", gridTemplateColumns: "30% auto"}}>
      <p className="font-face-cymo" style={{fontSize: "26px"}}>{label}</p>
      <div style={{alignSelf: "center"}}><Switch onChange={handleOnchange}/>Not connected yet</div>  
    </div>
  );
}