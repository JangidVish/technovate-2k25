import React, { useEffect } from "react";
import "./sample.css";
import techsangam from "./images/techsangam.png";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/MindBridge.pdf";
// import { rule } from "postcss";

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const handleRuleBook = ()=>{
    window.open(rulebook,"_blank");
  }
  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={techsangam} alt="" />
        <a
          href="https://grooviti.com/event/Bridging%20Minds/buyticket"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register" onClick={()=> {window.open("https://grooviti.com/event/Bridging%20Minds/buyticket","_blank")}}>Register Now</div>
        </a>
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
        </div>
      </div>
      <div className="dashed-line"></div>
      {/* <div></div> */}
      <div className="containerleft">
        <div className="container">
          <h3 className="about0" onClick={handleRuleBook}>Show RuleBook</h3>
        </div>
        {/* <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
            
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              limit of 5!
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              200/- Per Team
            </span>
          </div>
          <div className="container about2">
            <span style={{ color: "FDC32D" }}>TIME DURATION : </span>
            <span className="notbold" style={{ color: "white" }}>
              20-25 mins
            </span>
          </div>
          <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
              --{" "}
            </span>
          </div>
          <div className="container about4">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <span className="notbold">
              <span style={{ color: "white" }}>1st </span>
              <span style={{ color: "#563380" }}> --</span>
            </span>
            <h6 className="prizeh">
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>2nd </span>
                <span style={{ color: "#563380" }}> --</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>3rd </span>
                <span style={{ color: "#563380" }}>--</span>
              </h6>
            </h6>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div>
          <h3 className="structure">STRUCTURE :</h3>
          <ul className="structureul">
            --
          </ul>
        </div>
        <div className="generalrules">
          <h3 className="generalrulesheading">GENERAL RULES :</h3>
          <ul className="structureul">
            <li>
            Three teams will enter each block.
            </li>
            <li>
            Only the first fifteen teams that register will be permitted.
            </li>
            <li>
            The first team out of each of the five rooms will advance to the finals.
            </li>
            <li>
            Each block will feature a code-containing box that must be opened in order to access the escape room. The code must be decoded and sent to the organizer for approval
            </li>
          </ul>
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              - --
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
                - --
              </h6>
            </span>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br> */}
      </div>
    </>
  );
}

export default Sample;
