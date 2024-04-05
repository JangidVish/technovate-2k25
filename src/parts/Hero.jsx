import React from "react";
import "./Hero.css";
import Spline from "@splinetool/react-spline";
import logo from "../images/logo.png";
import Video from "../images/video.mp4";

const Hero = ({ reference, scrollToSection, next }) => {
  return (
    <div className="Hero" ref={reference}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="three-model">
        <Spline scene="https://prod.spline.design/n0rfOMHN2WlXuEvH/scene.splinecode" />
      </div>
      <div className="video-model">
        <video src={Video} autoPlay={true} loop muted></video>
      </div>
      <div className="text-bg-r text-bg">
        <h1 className="hero-txt" data-text="TECHN">
          TECHN
        </h1>
        <h1 className="hero-txt" data-text="OVAT">
          OVAT
        </h1>
      </div>

      <div className="moto">
        <h3>
          Where <span>Technology</span> Meets Innovation
        </h3>
      </div>

      <div className="scroll-sec">
        <div className="arrow">
          <i class="bx bx-arrow-back"></i>
        </div>
        {/* <div className="text">Scroll</div> */}
      </div>
    </div>
  );
};

export default Hero;
