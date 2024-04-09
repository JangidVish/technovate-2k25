import React, { useEffect } from "react";
import "./sample.css";
import bgmi from "./images/bgmi.png";
import blobPages from "../images/blob1.svg";

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={bgmi} alt="" />
        <a
          href="https://konfhub.com/checkout/technovate2024?ticketId=15183"
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
          BGMI & Valorant are free-to-play multiplayer tactical first-person shooter developed and published by Riot Games. Launched in June 2020, it quickly gained popularity within the gaming community. Set in a near-future Earth, Valorant pits teams of attackers and defenders against each other in intense, fast-paced matches.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              Squad
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
              About 1hr
            </span>
          </div>
          <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            Lab 411 (optional)
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
            <li>
            Matches will be conducted online till semi-Finals. Last 2 teams will decide whether they want to play Final in college or play from their home.
            </li>
            <li>
            Matches will be held online for qualifying the finalists. According to the timetable made by organizers.
            </li>
            <li>
            Final match will be organized at the PCCOER campus or online as per team requirement. Prizes will be distributed.
            </li>
          </ul>
        </div>
        <div className="generalrules">
          <h3 className="generalrulesheading">GENERAL RULES :</h3>
          <ul className="structureul">
            
            <li>
            *Entry Fee Policy: * All entry fees are non-refundable, regardless of circumstances.
            </li>
            <li>
            *Organizer Liability: * The organizers will not be held responsible for any issues arising from participant-side problems.
            </li>
            <li>
            *Fair Gameplay: * The use of bots, hacks, or any other unfair advantages is strictly prohibited and will result in immediate disqualification.
            </li>
            <li>
            *Behavioral Standards: * Any form of misconduct, including but not limited to harassment, abuse, or unsportsmanlike behavior, will not be tolerated and may result in disqualification or further consequences.
            </li>
            <li>
            *Timeliness: * Teams must join the tournament at the designated time. Failure to do so may result in disqualification.
            </li>
            <li>
            Teams are comprised of four-five players, each with their own individual account. Account sharing is strictly prohibited.
            </li>
            <li>
            Specific game settings, including server region and game mode, will be specified by the tournament organizers and must be adhered to by all participants.
            </li>
            <li>
            Players are expected to conduct themselves in a sportsmanlike manner at all times.
            </li>
            <li>
            Cheating, exploiting glitches, or engaging in any form of unsportsmanlike behavior is strictly prohibited and will result in severe penalties, including disqualification.
            </li>
            <li>
            These rules are designed to ensure fair competition and uphold the integrity of the tournament. Participants are expected to familiarize themselves with and adhere to these regulations. Violations may result in penalties, up to and including disqualification from the tournament.
            </li>
          </ul>
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              Gaurav Nipane: - 7620462025
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
              Atharv Vetal: - 8149980110
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
              Austin George:- 9730642299
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
