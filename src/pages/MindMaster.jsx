import React, { useEffect } from "react";
import "./sample.css";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/MindMasters.pdf"

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
        {/* <img className="topimg" src={bgmi} alt="" /> */}
        <h1 className="text-6xl font-bold text-white p-4">Mind Masters</h1>
        <a
          href="https://grooviti.com/event/Mind%20Masters/buyticket"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
        <div className="register" onClick={()=> {window.open("https://grooviti.com/event/Mind%20Masters/buyticket","_blank")}}>Register Now</div>
        </a>
        <br /><br /><br /><br />
      
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
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
          Step into the hot seat and challenge your intellect in Mind Masters, a thrilling quiz 
          competition inspired by Kaun Banega Crorepati! Test your knowledge across various topics, 
          tackle mind-boggling questions, and climb the ladder of success with each correct answer. 
          With exciting lifelines, intense competition, and an electrifying atmosphere, Mind Masters 
          promises to be the ultimate test of wit, strategy, and presence of mind. Are you ready to claim 
          the title of the ultimate quiz champion? 
          </p>
        </div>
        <div>
          {/* <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : 5 </span>
           
          </div> */}
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              50 /-
            </span>
          </div>
          {/* <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
              --{" "}
            </span>
          </div> */}
          {/* <div className="container about4">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <h6 className="prizeh">
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
            </h6>
          </div> */}
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
              Sharvari Kinge: 95616 65403
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
                  Ishaan Gandhi: 88302 12369
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
                    Om More: 95118 39021 
              </h6>
            </span>
          </div>
        <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
               {" "}
               PCCoer{" "}
              
            </span>
          </div>
        </div>
   
      </div>
      </div>
     
    </>
  )
}

export default Sample;
