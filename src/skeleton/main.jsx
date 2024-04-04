import React, { useRef } from "react";

import Hero from "../parts/Hero";
import Navbar from "../components/Navbar";
import About from "../parts/About"
import Events from "../parts/Events";

const Main = () => {

    const home = useRef(null);
    const team = useRef(null);
    const events = useRef(null);
    // const sponser = useRef(null);
    const count = useRef(null);

    const scrollToSection = (elementRef) => {
        console.log("scrollsection");
        console.log(elementRef);
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} reference={{ home, events}}/>
      <Hero scrollToSection={scrollToSection} reference={home} next={count} />
      <About
        scrollToSection={scrollToSection}
        reference={count}
        next={team}
      />
      <Events reference={events} />
    </>
    
  )
}

export default Main