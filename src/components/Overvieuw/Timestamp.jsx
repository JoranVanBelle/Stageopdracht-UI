import { useState, useEffect } from "react";
import { format } from 'date-fns'

export default function Timestamp({time}) {

  const [timestamp, setTimestamp] = useState();

  useEffect(() => {
    const updateTime = async () => {
      const date = format(new Date(time), 'dd/MM/yyyy - HH mm')
      setTimestamp(date)
    };
    updateTime();
  }, [time]);

  return(
    <>
      <div style={{textAlign: "right", fontWeight: "bold", fontSize: "9px", paddingBottom: "2px"}}>
        Last update: {timestamp}
      </div>
    </>
  );
}