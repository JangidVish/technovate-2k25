import React, { useEffect } from "react";
import "./sample.css";
import sharktank from "./images/sharktank.png";
import blobPages from "../images/blob1.svg";
// import rulebook from "../RuleBook/Code_RC.pdf"
function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={sharktank} alt="" />
        <a
          href="https://konfhub.com/technovate2024#tickets"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register" onClick={()=> {window.open("https://grooviti.com/event/SolveX/buyticket","_blank")}}>Register Now</div>
        </a>
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
        </div>
      </div>
      <div className="dashed-line"></div>
      {/* <div></div> */}
      <div className="containerleft">
      <div className="about0" onClick={()=>{window.open(rulebook,"_blank")}}>
        Show RuleBook
      </div>
        <div className="container">
          <h3 className="about0">ABOUT :</h3>
        </div>
        <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
          SolveX is a technical event where participants tackle real-world problem statements and present their innovative solutions through compelling PPT presentations. It challenges creativity, analytical thinking, and presentation skills, making it a perfect platform for aspiring problem-solvers to showcase their ideas.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              {" "}
              1-2 Person{" "}
            </span>
          </div>
          <br />
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              49/- Per Person
            </span>
          </div>
          <br />
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
                {" "}91521 81521{" "}
              </h6>
            </span>
          </div>
          <br /><br /><br /><br />
          {/* <div className="container about0">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <h6 className="prizeh">
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>1st </span>
                <span style={{ color: "#563380" }}> Rs 5000</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>2nd </span>
                <span style={{ color: "#563380" }}> Rs 3000</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>3rd </span>
                <span style={{ color: "#563380" }}>Rs 2000</span>
              </h6>
            </h6>
          <br />
          </div> */}
        {/* <div className="container about0">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
            CAMPUS PARKING{" "}
            </span>
          </div> */}
          <br />
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Sample;
