import React, { useEffect } from "react";
import "./sample.css";
import bgmi from "./images/bgmi.png";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/Valorant.pdf"

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleRuleBook = ()=>{
    window.open(rulebook,"_blank")
  }

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={bgmi} alt="" />
      
        <div className="register" onClick={()=> {window.open("https://grooviti.com/event/Valorant/buyticket","_blank")}}>Register Now</div>
    
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
        </div>
        <div className="about0" onClick={handleRuleBook}>
        Show RuleBook
      </div>
      </div>
     
    </>
  );
}

export default Sample;
