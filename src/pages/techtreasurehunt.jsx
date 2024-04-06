import React, { useEffect } from "react";
import "./sample.css";
import hawkmore_img from "./images/sharktank.png";
import blobPages from "../images/blob1.svg";

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={hawkmore_img} alt="" />
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
            The Technovate 2024 Hawk Race League will push all limits, combining
            the best of real drone racing and ultimate pilot challenges. Watch
            the drone pilots race high-speed drones in spectacular courses
            across all dimensions. As our most significant season yet, the most
            skilled practiced and disciplined pilots will aim to dominate the 2
            rounds of racing through iconic obstacles sports arenas to be
            crowned the Technovate 2k23 HAWK Race League Champion.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              Solo
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              250/- Per Drone
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
              Open Gym, PCCOER
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
              The 1st and 2nd Round consists of still obstacles. Complexity will
              be more for the 2nd Round.
            </li>
            <li>
              The Pilots have to pass the drones within less duration through
              obstacles. In case of any tie breakers one more round will be
              conducted.
            </li>
            <li>
              In the end, the first 3 Pilots/ Drones completing challenges in
              less time will be Winner and Runner ups and rewarded with Prize
              money.
            </li>
            <li>Every Participant will receive certificates.</li>
          </ul>
        </div>
        <div className="generalrules">
          <h3 className="generalrulesheading">GENERAL RULES :</h3>
          <ul className="structureul">
            <li>
              Pilots must show Fail-Safe and Arming/Disarm Working at
              Registration Desk
            </li>
            <li>
              Drone Specs:
              <ol className="abcde" style={{ listStyleType: "lower-alpha" }}>
                <li>Up to 6-inch props.</li>
                <li>6” max frame size.</li>
                <li>2, 3, or 4 blade max.</li>
                <li>Any material for props but not Carbon Fiber.</li>
                <li>No Weight Limit.</li>
              </ol>
            </li>
            <li>Pilots will carry a minimum of 3 batteries.</li>
            <li>
              Pilots will carry their own battery chargers, charging points
              would be provided.
            </li>
            <li>
              Pilots should bring their own soldering and other materials. All
              frames must pass a safety and airworthiness inspection. Once the
              airframe has been checked and approved, it must not be modified or
              changed, or it will need to be re-inspected.
            </li>
            <li>
              Any inappropriate behavior by the pilot towards the
              volunteers/organizers/other pilots will lead to immediate
              disqualification from the event.
            </li>
            <li>
              Students should refrain from abusive language, obscene displays
              during the competitions, if one fails to do so they will be
              disqualified.
            </li>
            <li>
              Students must carry their ID cards of their respected
              institutes/college.
            </li>
          </ul>
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
                Aditya Deshmukh : 8237125133
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
                Shreya Kangle : 7498784872
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
