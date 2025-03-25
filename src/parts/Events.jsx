import React from "react";
import "./Events.css";
import SharkTank from "../images/Events/solveX.jpg";
import Tth from "../images/Events/tth.png";
import brocode from "../images/Events/brocode.png";
import hireFire from "../images/Events/iplAuction.jpg";
import rcCar from "../images/Events/error404.jpg";
import techSangam from "../images/Events/techsangam.png";
import catiaWars from "../images/Events/catiaWars.png";
import mun from "../images/Events/cad-o-create.jpg";
import bgmi from "../images/Events/bgmi.png";
import auction from "../images/Events/rc-car.jpg";
import electron from "../images/Events/electrothon.jpg"
import autoexpo from "../images/Events/treasurehunt.jpg"
import EventLCard from "../components/EventLCard";
import mindmaster from "../images/Events/mindmaster.jpgjpg";

const Events = ({ reference }) => {
  return (
    <div className="Events" ref={reference}>
      <div className="heading">
        <div>Events</div>
      </div>
      <div className="cards">     
        <EventLCard
          name={"Geek It Out"}
          image={Tth}
          content={
            "Showcase your coding, problem-solving, and debating skills in this thrilling 3-round competition! "
          }
          link={"/geekitout"}
        />
        <EventLCard
          name={"Bro Code"}
          image={brocode}
          content={
            "A thrilling coding battle for teams of two! "
          }
          
          link={"/thebrocode"}
        />
        <EventLCard
          name={"Battle Of the Bids"}
          image={hireFire}
          content={
            "Quiz, strategize, bid, build, compete: Dive into the ultimate IPL challenge."
          }
          link={"/iplauction"}
        />
          <EventLCard
          name={"Valorant"}
          image={bgmi}
          content={
            "Play, compete, strategize, challenge, entertain: Dive into the world of games."
          }
          link={"/valorent"}
        />
        <EventLCard
          name={"SolveX"}
          image={SharkTank}
          content={
            "Ideate, analyze, create, innovate, present: Dive into the world of problem-solving."
          }
          link={"/solvex"}
        />
        <EventLCard
          name={"ERROR 404"}
          image={rcCar}
          content={
            "Debug, solve, excel—feel the thrill of fixing code under pressure! Speed demons, race in Fast & Furious!"
          }
          link={"/error404"}
        />
        <EventLCard
          name={"Bridging Minds"}
          image={techSangam}
          content={
            "A competition to build small-scale bridges with materials like balsa wood, designed to hold the maximum load."
          }
          link={"/mindbridge"}
        />
        <EventLCard
          name={"BGMI domination"}
          image={catiaWars}
          content={
            "A BGMI competition where players showcase their skills, strategy, and teamwork to battle it out and claim the ultimate victory."
          }
          link={"/bgmi"}
        />
        <EventLCard
          name={"Cad-O Create "}
          image={mun}
          content={
            "Design, innovate, model, create, deliver: Craft efficient CAD solutions in just 1.5 hours!"
          }
          link={"/cadocreate"}
        />
      
        <EventLCard
          name={"RC Challenge"}
          image={auction}
          content={
            "Race, maneuver, overcome, accelerate, conquer: Master the track with your RC skills!"
          }
          link={"/rcrace"}
        />
        <EventLCard
          name={"Electrothon"}
          image={electron}
          content={
            "An exciting electronics marathon with four stages and a points-based system!Test your electronics skills—debug, design, and compete!"
          }
          link={"/electrothon"}
        />
        <EventLCard
          name={"Treasure Hunt"}
          image={autoexpo}
          content={
            "An exhilarating four-round treasure hunt full of challenges and adventure!"
          }
          link={"/treasurehunt"}
        />

<EventLCard
          name={"Mind Masters"}
          image={mindmaster}
          content={
            "Step into the hot seat in Mind Masters! Test your knowledge, tackle tricky questions, and strategize your way to victory in this thrilling quiz showdown!"
          }
          link={"/cadocreate"}
        />
      </div>
    </div>
  );
};

export default Events;
