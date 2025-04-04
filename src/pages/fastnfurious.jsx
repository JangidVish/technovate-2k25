import React, { useEffect } from "react";
import "./sample.css";
// import fstnfurious from "./images/fastnfurious.png";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/ERROR404.pdf"
function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        {/* <img className="topimg" src={fstnfurious} alt="" /> */}

        <h1 className="text-6xl font-bold text-white p-4">ERROR 404</h1>

        {/* <a
          href="https://grooviti.com/event/ERROR%20404/buyticket"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register" onClick={()=> {window.open("https://grooviti.com/event/ERROR%20404/buyticket","_blank")}}>Register Now</div>
        </a> */}
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
        </div>
      </div>
      <div className="dashed-line"></div>
      {/* <div></div> */}
      <div className="containerleft">
      <div className="about0" onClick={()=>{window.open(rulebook,"_blank")}} >
        Show RuleBook
      </div>
        <div className="container">
          <h3 className="about0">ABOUT :</h3>
        </div>
        <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
          Error404 is an exciting debugging challenge where participants dive into faulty code, identify errors, and fix them across multiple rounds. With increasing difficulty at each stage, this competition tests coding skills, logical thinking, and efficiency under pressure.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
            1 to 2  per team
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              49/- Per Team
            </span>
          </div>

          {/* <div className="container about4">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <span className="notbold">
              <span style={{ color: "white" }}>1st </span>
              <span style={{ color: "#563380" }}> --</span>
            </span>
            <h6 className="prizeh">
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>2nd </span>
                <span style={{ color: "#563380" }}>--</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>3rd </span>
                <span style={{ color: "#563380" }}> --</span>
              </h6>
            </h6>
          </div> */}
        </div>
        <br />
        <br />
        <div className="generalrules">
          <h3 className="generalrulesheading"></h3>
          <ul className="structureul">
            {/* <li>
            This event will be for whole day with some short breaks.
            </li>
            <li>
            There will be five RC cars.
            </li>
            <li>
            Each car will be given to individual for race with other individuals.
            </li>
            <li>
            The Participant should complete 3 laps of track (duration will be of 15-20 min).
            </li>
            <li>
            Race will take place between these five participants and the winner will be awarded with 'goodies'.
            </li>
            <li>
            In case of any damage of car charges will be applied of rupees 500/-
            </li> */}
          </ul>
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              76202 58694
              </h6>
              {/* <h6 className="notbold deskcont" style={{ color: "white" }}>
                - --
              </h6> */}
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
