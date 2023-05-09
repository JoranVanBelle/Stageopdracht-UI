import { useState, useEffect } from "react";
import { format } from 'date-fns'
import { BsCalendar4, BsClock } from "react-icons/bs";

export default function TimestampDetail({time}) {

  const [measurementDate, setMeasurementDate] = useState();
  const [measurementTime, setMeasurementTime] = useState();

  useEffect(() => {
    const updateTime = async () => {
      const formattedDate = format(new Date(time), 'dd/MM/yyyy')
      const formattedTime = format(new Date(time), "HH:mm:ss")
      setMeasurementDate(formattedDate)
      setMeasurementTime(formattedTime)
    };
    updateTime();
  }, [time]);

  return(
    <>
      <div style={{textAlign: "left", padding: "10px 0"}}>
        <BsCalendar4 /> {measurementDate}
      </div>
      <div style={{textAlign: "left", padding: "10px 0"}}>
        <BsClock /> {measurementTime}
      </div>
    </>
  );
}