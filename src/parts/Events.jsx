import React from 'react';
import './Events.css';
import SharkTank from "../images/Events/shark.png";
import Tth from "../images/Events/tth.png";
import EventLCard from "../components/EventLCard" ;


const Events = ({reference}) => {
  return (
    <div className="Events" ref={reference}>
        <div className="heading">
            <div>Events</div>
        </div>
        <div className="cards">
          <EventLCard name={"Sharktank"} image={SharkTank} content={"Entrepreneurs pitch ideas to investors for funding and mentorship."} link={"/sharktank"} />
          <EventLCard name={"Tech Treasure Hunt"} image={Tth} content={"Seek clues, unravel mysteries, and find the hidden treasure trove."} link={"/techtreasurehunt"} />
            
        </div>
        
    </div>
  )
}

export default Events