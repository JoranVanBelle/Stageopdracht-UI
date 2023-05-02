import { useState, useEffect } from "react";

export default function FeedbackPopup({timeout, startPopup, colorPopup}) {

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
         <div style={{position: "fixed", top: "50%", left: "50%", transform: 'translate(-50%, -50%)', border: "3px solid darkgray", borderRadius: "20px", paddingBottom: "10px"}}>  {/*position: "fixed", top: "25%", height: '15%' */}
          
          <div style={{position: "relative", textAlign: "center", padding: "0", fontSize: "20px", paddingBottom: "3px"}}>Feedback sent<br/>you will be sent back to the previous page in {(time/1000).toFixed(0)} {(time/1000).toFixed(0) === 1 ? "second" : "seconds"}</div>
          <div style={{ position: 'fixed', height: '5px', backgroundColor: `rgba(${colorPopup}, 0.9)`, width: `${width}%`, transition: `width ${time}ms ease-out` }}></div>
          
          </div>
      </div>
    </>
  );
}