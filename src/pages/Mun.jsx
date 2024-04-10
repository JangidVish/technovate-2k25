import React, { useEffect } from "react";
import "./sample.css";
import mun from "./images/mun.png";
import blobPages from "../images/blob1.svg";

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={mun} alt="" />
        <a
          href="https://konfhub.com/technovate2024#tickets"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register">Register Now</div>
        </a>
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
        </div>
      </div>
      <div className="dashed-line"></div>
      {/* <div></div> */}
      <div className="containerleft">
        <div className="container">
          <h3 className="about0">ABOUT :</h3>
        </div>
        <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
            MUN (Model United Nations) is an academic simulation
            of the United Nations where students represent countries and
            discuss global issues, practice diplomacy, and work towards finding
            solutions through debate and negotiation.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              --
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              50/- Per Team
            </span>
          </div>
          <div className="container about2">
            <span style={{ color: "FDC32D" }}>TIME DURATION : </span>
            <span className="notbold" style={{ color: "white" }}>
              --
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
            Dress Code: Formal attire.
            </li>
            <li>
            Behavior: Respectful and professional conduct.
            </li>
            <li>
            Position Papers: Submit outlining country stance.
            </li>
            <li>
            Speaking Time: Limits may apply.
            </li>
            <li>
            Decorum: Diplomatic language.
            </li>
            <li>
            Research: Thorough preparation.
            </li>
            <li>
            Committee Rules: Specific procedures.
            </li>
            <li>
            Voting: Decision-making process.
            </li>
            <li>
            Awards: Recognition for outstanding delegates.
            </li>
            <li>
            Always check the event's specific rules for details.
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
        <br></br>
      </div>
    </>
  );
}

export default Sample;
