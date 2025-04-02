import React,{useEffect} from 'react'
import "./sample.css";
import ipl from "./images/ipl.png";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/Treasurehunt.pdf"

const Autoexpo = () => {
     useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
  return (
    <>
     <div className="container upperimage">
        {/* <img className="topimg" src={ipl} alt="" /> */}
        <h1 className="text-6xl font-bold text-white p-4">TREASURE HUNT</h1>

        {/* <a
          href="https://grooviti.com/event/Treasure%20Hunt/buyticket"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register" onClick={()=> {window.open("https://grooviti.com/event/Treasure%20Hunt/buyticket","_blank")}}>Register Now</div>
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
          The Treasure Hunt is an exhilarating four-round competition that tests participants ’intelligence, teamwork, 
and problem-solving skills. Teams will navigate through challenging rounds to claim victory and win a 
₹5,000/- cash prize! 
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              4 Per Team
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              200/- Per Team
            </span>
          </div>

          <div className="container about2">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
            5th floor, PCCOER {" "}
            </span>
          </div>
          <div className="container about3">
            <span style={{ color: "FDC32D" }}> CONTACT : <span>
            
              <h6 className=" deskcont" style={{ color: "white" }}>
              Kalyani Kolpe: 9657889259 
              </h6>
              <h6 className=" deskcont" style={{ color: "white" }}>
               Isha Khandare: 9022648717 
              </h6>
            </span> </span>
          </div>
        <br /><br /><br />
          <br /><br />
          <div className="container about4">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <h6 className="prizeh">
            <h6 className="notbold prizeh">
              {/* <span style={{ color: "white" }}>1st </span> */}
              <span style={{ color: "#563380" }}> Rs 5000 /-</span>
            </h6>
             </h6>
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default Autoexpo
