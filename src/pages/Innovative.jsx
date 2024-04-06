import React, { useEffect } from "react";
import "./sample.css";
import innovative from "./images/innovative.png";
import blobPages from "../images/blob1.svg";

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={innovative} alt="" />
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
      <div className="about0">
        NO Rulebook found!
      </div>
    </>
  );
}

export default Sample;
