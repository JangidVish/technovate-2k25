import React,{useEffect} from 'react'
import "./sample.css";
import ipl from "./images/ipl.png";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/Electrothon.pdf"

const Electrothon = () => {
     useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
  return (
    <>
     <div className="container upperimage">
        <img className="topimg" src={ipl} alt="" />
        <a
          href="https://konfhub.com/technovate2024#tickets"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register" onClick={()=> {window.open("https://grooviti.com/event/RC%20Challenge/buyticket","_blank")}}>Register Now</div>
        </a>
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
          A marathon which require basic knowledge of electronics.
            Electrothon consists of 4 levels based on points system , there will be no elimination.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              3-4 Per Team
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              100/- Per Team
            </span>
          </div>

          <div className="container about2">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
              Campus Parking{" "}
            </span>
          </div>
          <div className="container about3">
            <span style={{ color: "FDC32D" }}> CONTACT : <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              Aditya Patil:   92095 27174 
              </h6>
              <h6 className=" deskcont" style={{ color: "white" }}>
              Rushikesh Pawar: 82375 11429  
              </h6>
              <h6 className=" deskcont" style={{ color: "white" }}>
              Shreyash Pawar: 90960 48612  
              </h6>
            </span> </span>
          </div>
        <br /><br /><br />
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
  )
}

export default Electrothon
