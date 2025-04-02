import React, { useEffect } from "react";
import "./sample.css";
// import bgmi from "./images/bgmi.png";
import blobPages from "../images/blob1.svg";

import rulebook from "../RuleBook/Valorant.pdf"

// import rulebook from "../RuleBook/Valorant.pdf";

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleRuleBook = () => {
    window.open(rulebook, "_blank");
  };

  return (
    <>
      <div className="container upperimage">
        {/* <img className="topimg" src={bgmi} alt="" /> */}
        <h1 className="text-6xl font-bold text-white p-4">VALORANT</h1>
        {/* <a
          href="https://grooviti.com/event/Valorant/buyticket"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="register"
            onClick={() => {
              window.open("https://grooviti.com/event/Valorant/buyticket", "_blank");
            }}
          >
            Register Now
          </div>
        </a> */}

        <div className="blobpagest">
          <img src={blobPages} alt="" />
        </div>
      </div>

      <div className="container-left">
        <div className="about0" onClick={handleRuleBook}>
          Show RuleBook
        </div>

        <div className="container">
          <h3 className="about0">ABOUT :</h3>
        </div>

        <div className="pcontainer">
          <p className="hawkpara">
            Welcome to the Valorant Tournament Championship 2025 hosted by Pimpri Chinchwad College of Engineering and Research, Ravet. This event is open to both internal and external participants. Compete for the chance to win exciting prizes and show off your skills in one of the most popular tactical FPS games.
          </p>
        </div>

        <div className="container about0">
          <span style={{ color: "FDC32D" }}>TEAM SIZE : 5 </span>
        </div>

        <div className="container about1">
          <span style={{ color: "FDC32D" }}>FEES : </span>
          <span className="notbold" style={{ color: "white" }}>
            99/- Per Team
          </span>
        </div>

        {/* Prize Section */}
        <div className="container about4">
          <span style={{ color: "FDC32D" }}>PRIZES : </span>
          <div className="prizeh">
            <h6 className="notbold prizeh">
              <span style={{ color: "white" }}>1st </span>
              <span style={{ color: "#563380" }}> Rs 1000/-</span>
            </h6>
            <h6 className="notbold prizeh">
              <span style={{ color: "white" }}>2nd </span>
              <span style={{ color: "#563380" }}> Rs 800/-</span>
            </h6>
            <h6 className="notbold prizeh">
              <span style={{ color: "white" }}>3rd </span>
              <span style={{ color: "#563380" }}> Rs 500/-</span>
            </h6>
          </div>
        </div>

        <br /> {/* Added break for spacing */}

        {/* Venue Section */}
        <div className="container about3">
          <span style={{ color: "FDC32D" }}>VENUE : </span>
          <span className="notbold" style={{ color: "white" }}>
            ROOM NO. 516 & 517
          </span>
        </div>

        {/* Contact Section */}
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <h6 className="deskcont" style={{ color: "white" }}>
              8805017800
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sample;
