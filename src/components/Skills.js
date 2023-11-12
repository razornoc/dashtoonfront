import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import Generate from "./Generate";
import Preference from "./Preference";
import { useState } from "react";

function Skills() {
  const [picked,setPicked]=useState(false)
  const [choice,setChoice]=useState()
  const handleDataFromChild = (data) => {
    setPicked(data);
    
  };
  const choiceDataFromChild=(data)=>{
    setChoice(data)
  }
  return (
    <div>
      {!picked&& <Preference onDataFromChild={handleDataFromChild} choiceData={choiceDataFromChild} />}
      {picked &&<Generate choice={choice}/>}
    </div>
  )
}
export default Skills
