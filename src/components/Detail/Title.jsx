import { useEffect, useState } from "react";

export default function Title({dataID, location, warning}) {

  const [title, setTitle] = useState();

  useEffect(() => {
    const updateVariables = async () => {
      setTitle(dataID.includes("Unkiteable") ? `${location} is not kiteable` : `${location} is kiteable`)
    };
    updateVariables();
  }, [dataID, location]);

  return(
    <>
      <div style={{border: `4px solid ${dataID.includes("Kiteable") ? "#82B366" : warning ? "#e69500" : "#B85450"}`, borderRadius: '15px', backgroundColor:  dataID.includes("Kiteable") ? "#D5E8D4"  : warning ? "#ffe3b1" : "#F8CECC", padding:"10px", margin: "5px", fontWeight: "bolder", fontSize: "24px", textAlign: "center", fontFamily: "bodoni"}}>
        {title}
      </div>
    </>
  );
}