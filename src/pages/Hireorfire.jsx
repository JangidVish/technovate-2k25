import React, { useEffect } from "react";
import "./sample.css";
import hirefire from "./hirefire.png";
import blobPages from "../images/blob1.svg";

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={hirefire} alt="" />
        <a
          href="https://konfhub.com/checkout/technovate2024?ticketId=15183"
          className="btn-register"
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
            Gear up for the ultimate skills showcase in Hire Or Fire! Test your prowess in 
            technical quizzes, problem-solving assessments, coding challenges, and 
            interview rounds. Show off your skills as a Computer Engineer. This Competition 
            will be held in 4 rounds,
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
              --{" "}
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              50/- Per Person
            </span>
          </div>
          <div className="container about2">
            <span style={{ color: "FDC32D" }}>TIME DURATION : </span>
            <span className="notbold" style={{ color: "white" }}>
              {" "}
              --{" "}
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
              <span style={{ color: "#563380" }}> Rs 5000/-</span>
            </span>
            <h6 className="prizeh">
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>2nd </span>
                <span style={{ color: "#563380" }}> Rs 3000/-</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>3rd </span>
                <span style={{ color: "#563380" }}> Rs 2000/-</span>
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
                Technical Quiz:
              <ul className="abcde">
                <li>Put your algorithms and data structures knowledge to the test.</li>
              </ul>
            </li>

            <li>
                Aptitude & Numerical: 
              <ul className="abcde">
                <li>
                    Showcase your problem-solving skills in this challenging round.
                </li>
              </ul>
            </li>

            <li>
                Coding Challenge:
              <ul className="abcde">
                <li> Demonstrate your coding abilities under pressure.</li>
              </ul>
            </li>

            <li>
                Interview Rounds:: 
              <ul className="abcde">
                <li>A total of 8 contenders will compete in the interview rounds for a chance to show your skills as a potential employee.</li>
                <li>Top scorers from the first 3 rounds directly qualify, while the top 5 contestants from cumulative scores also advance.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="generalrules">
          <h3 className="generalrulesheading">GENERAL RULES :</h3>
          <ul className="structureul">
            <li>
            Registrations open to college students only. Each participant must be 
            enrolled in an accredited college or university.
            </li>
            <li>
            Any Misdemeanor of a participant will result in disqualification.
            </li>
            <li>
            No mobile phones will be allowed. However, the participants can carry 
            their own notepads, pen/pencil and water bottles.
            </li>
            <li>
            Any Participant found accessing the internet in the coding round will be 
            disqualified immediately.
            </li>
            <li>
            The competition is individual-based; collaboration or assistance from 
            others during the rounds is strictly prohibited. 
            </li>
            <li>
            Scores will be calculated based on accuracy, speed, and overall 
            performance in each round.
            </li>
            <li>
            Participants must comply with all rules and instructions provided by the 
            organizing committee throughout the duration of the competition
            </li>
          </ul>
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              {" "}
              --{" "}
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
              {" "}
              --{" "}
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
