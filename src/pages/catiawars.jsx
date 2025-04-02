import React, { useEffect } from "react";
import "./sample.css";
import catiawars from "./images/catiawars.png";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/BGMI.pdf"
function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

    const handleRuleBook = ()=>{
      window.open(rulebook,"_blank")
    }

  return (
    <>
      <div className="container upperimage">
        {/* <img className="topimg" src={catiawars} alt="" /> */}
        <h1 className="text-6xl font-bold text-white p-4">BGMI DOMINATIONS</h1>

        {/* <a
          href="https://grooviti.com/event/PUBG%20domination/buyticket"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register" onClick={()=> {window.open("https://grooviti.com/event/PUBG%20domination/buyticket","_blank")}}>Register Now</div>
        </a> */}
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
        </div>
      </div>
      <div className="dashed-line"></div>
      <div className="containerleft">
      <div className="about0" onClick={handleRuleBook} >
         Show RuleBook
      </div>
        <div className="container">
          <h3 className="about0">ABOUT :</h3>
        </div>
        <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
          Welcome to the BGMI Championship 2025 hosted by Pimpri Chinchwad College of Engineering and Research, Ravet. This event is open to both 
internal and external participants. Compete for the chance to win exciting 
prizes and show off your skills in one of the most popular mobile games. 
          </p>
        </div>
        <div>
          
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              50/- Per Person
            </span>
          </div>

          <div className="container about2">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
            PCCOER, PUNE – 412101{" "}
            </span>
          </div>
          <div className="container about3">
            <span style={{ color: "FDC32D" }}> CONTACT : <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              Sanket Wable : 8766853505 
              </h6>
              <h6 className=" deskcont" style={{ color: "white" }}>
              Atharv Devkar : 9022379806  
              </h6>
            </span> </span>
          </div>
          <br /><br />
          <div className="container about4">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <h6 className="prizeh">
            <h6 className="notbold prizeh">
              <span style={{ color: "white" }}>1st </span>
              <span style={{ color: "#563380" }}> Rs 5000 /-</span>
            </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>2nd </span>
                <span style={{ color: "#563380" }}> Rs 3000 /-</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>3rd </span>
                <span style={{ color: "#563380" }}> Rs 2000 /-</span>
              </h6>
            </h6>
          </div>
        </div>
        
        
      </div>
    </>
  );
}

export default Sample;
