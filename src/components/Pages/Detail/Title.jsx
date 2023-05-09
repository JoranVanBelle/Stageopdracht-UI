import { useEffect, useState } from "react";

export default function Title({dataID, location, warning}) {

  const [title, setTitle] = useState();

  useEffect(() => {
    const updateVariables = async () => {
      setTitle(dataID.includes("Kiteable") ? `${location} is kiteable` : warning ? `${location} is risky to kite` : `${location} is not kiteable`);
    };
    updateVariables();
  }, [dataID, location, warning]);

  return(
    <>
      <div key={"divtitle"+dataID} style={{border: `4px solid ${dataID.includes("Kiteable") ? "#82B366" : warning ? "#e69500" : "#B85450"}`, borderRadius: '15px', backgroundColor:  "#c0c0c0", padding:"10px", margin: "5px", fontWeight: "bolder", fontSize: "24px", textAlign: "center"}} className="font-face-cymo">
        {title}
      </div>
    </>
  );
}