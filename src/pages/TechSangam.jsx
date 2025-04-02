import React, { useEffect } from "react";
import "./sample.css";

import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/BridgingMinds.pdf";
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
        {/* <img className="topimg" src={techsangam} alt="" /> */}
        <h1 className="text-6xl font-bold text-white p-4">BRIDGE MINDS</h1>

        <a
          href="https://grooviti.com/event/Bridge%20Minds/buyticket"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register" onClick={()=> {window.open("https://grooviti.com/event/Bridge%20Minds/buyticket","_blank")}}>Register Now</div>
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
        <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
            
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              2 - 4
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              150/- Per Team
            </span>
          </div>
          <div className="container about2">
            <span style={{ color: "FDC32D" }}>TIME DURATION : </span>
            <span className="notbold" style={{ color: "white" }}>
              90 mins
            </span>
          </div>
          <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
            Geotech Lab 215 -PCCOER, Pune{" "}
            </span>
          </div>
          <div className="container about4">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <span className="notbold">
              <span style={{ color: "white" }}>1st </span>
              <span style={{ color: "#563380" }}> Rs.5000/-</span>
            </span>
            <h6 className="prizeh">
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>2nd </span>
                <span style={{ color: "#563380" }}> RS.3000/-</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>3rd </span>
                <span style={{ color: "#563380" }}>RS.2000/-</span>
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
            1. Team Composition: It is a Spot Event Each team can have 2-4 members.No external 
            help is allowed (only team members can work on their bridge). 
            </li>
            <li>
            2. Registration: Teams must register before the deadline. 
            </li>
            <li>
            3. Bridge Type: Participants will construct a model bridge using specific materials given 
            by organisers.
            </li>
            <li>
            4. Time Limit: A fixed time duration of 90 MIN will be given to build the bridge. 
Participants should complete tasks within Stipulated time. 2 hours will be given to setting 
the gule, after that the testing will began
            </li>
          </ul>
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              ROHIT CHOPKAR - 9850852050
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
              VEDANT PATEKAR - 8484922135 
              </h6>
            </span>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br> 
      </div>
    </>
  );
}

export default Sample;
