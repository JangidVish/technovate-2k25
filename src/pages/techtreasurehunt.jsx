import React, { useEffect } from "react";
import "./sample.css";
// import treasure from "./images/treasure.png";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/GEEK.pdf";

function Sample() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleRuleBook = () => {
    window.open(rulebook,"_blank")
  };

  return (
    <>
      <div className="container upperimage p-4">
        {/* <img className="topimg" src={treasure} alt="" /> */}
        <h1 className="text-6xl font-bold text-white p-4">GEEK IT OUT</h1>
        {/* <a
          href="https://grooviti.com/event/Geek%20it%20out/buyticket"
          className="btn-register md:mt-10 mt-4"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register" onClick={()=> {window.open("https://grooviti.com/event/Geek%20it%20out/buyticket","_blank")}}>Register Now</div>
        </a> */}
        <div className="blobpagest ">
          <img src={blobPages} alt="" srcSet="" />
        </div>
      </div>
      <div className="dashed-line"></div>
      <div className="about0" onClick={handleRuleBook}>
        Show RuleBook
      </div>
      
      <div className="container about0">
        <span style={{ color: "FDC32D" }}>TEAM SIZE : 1 </span>
      </div>
      <div className="container about1">
        <span style={{ color: "FDC32D" }}>FEES : </span>
        <span className="notbold" style={{ color: "white" }}>
          50/- Per Person
        </span>
        <div className="container about2">
          <span style={{ color: "FDC32D" }}>PRIZES : </span>
          <h6 className="prizeh">
            <h6 className="notbold prizeh">
              <span style={{ color: "white" }}>1st </span>
              <span style={{ color: "#563380" }}> Rs 5000/-</span>
            </h6>
            <h6 className="notbold prizeh">
              <span style={{ color: "white" }}>2nd </span>
              <span style={{ color: "#563380" }}> Rs 3000/-</span>
            </h6>
            <h6 className="notbold prizeh">
              <span style={{ color: "white" }}>3rd </span>
              <span style={{ color: "#563380" }}> Rs 2000/-</span>
            </h6>
          </h6>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              77749 35301
              </h6>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sample;