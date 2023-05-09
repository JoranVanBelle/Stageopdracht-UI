import { useState, useEffect } from "react";

export default function FeedbackPopup({timeout, startPopup, colorPopup, text}) {

  const [time, setTime] = useState(timeout);
  const [width, setWidth] = useState(!startPopup ? 0 : 100);

  useEffect(() => {
    if (startPopup) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 10);
        setWidth((prevWidth) => prevWidth - 1);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [startPopup]);

  setTimeout(() => {
    setTime(0);
    setWidth(0);
  }, timeout);

  return(
    <>
      <div>
         <div style={{position: "fixed", top: "50%", left: "10%", right: "10%", transform: 'translate(0, -50%)', border: "3px solid darkgray", borderRadius: "20px", paddingBottom: "5px"}}>
          
            <div style={{ textAlign: "center", fontSize: "20px", paddingBottom: "3px"}}>{text}<br/>you will be sent back to the previous page in {(time/1000).toFixed(0)} {(time/1000).toFixed(0) === 1 ? "second" : "seconds"}</div>
            <div style={{ position: 'fixed', left: "2.5%", height: '5px', backgroundColor: `rgba(${colorPopup}, 0.9)`, width: `${width-5}%`, transition: `width ${time}ms ease-out`, borderBottom: `1px solid rgba(${colorPopup}, 0.9)`, borderRadius: "20px"}}></div>
          
          </div>
      </div>
    </>
  );
}