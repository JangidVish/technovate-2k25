import React, { useEffect } from "react";
import "./sample.css";
import brocode from "./images/brocode.png";
import blobPages from "../images/blob1.svg";
function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={brocode} alt="" />
        <a
          href="https://grooviti.com/event/Bro%20Code/buyticket"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register" onClick={()=> {window.open("https://grooviti.com/event/Bro%20Code/buyticket","_blank")}}>Register Now</div>
        </a>
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
        </div>
      </div>
      <div className="dashed-line"></div>
      {/* <div></div> */}
      <div className="containerleft">
      <div className="about0" >
        No RuleBook
      </div>
        <div className="container">
          <h3 className="about0">ABOUT :</h3>
        </div>
        <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
          Bro Code is a technical event that tests the knowledge, aptitude, and coding skills of
          participants in a team of two. The event is divided in 3 rounds. Top performers of each round
          will qualify for the next rounds.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : 2 </span>
            <span className="notbold" style={{ color: "white" }}>
              Duo
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              50/- Per Team
            </span>
          </div>
          {/* <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
              --{" "}
            </span>
          </div> */}
          <div className="container about4">
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
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br /><br /><br /><br />
        </div>
        <div>
          <h3 className="structure"></h3>
          
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              83082 07611
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
              80806 80061
              </h6>
            </span>
          </div>
        <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
               {" "}
               ROOM NO. 516 & 517{" "}
              
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
