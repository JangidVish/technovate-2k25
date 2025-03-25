import React, { useState, useEffect } from 'react';
import technovateMain from '../images/Carousel1/technovatemain.png';
import bgmi from '../images/Carousel1/BGMI.png';
import bridgingMinds from '../images/Carousel1/bridgingminds.png';
import brocode from '../images/Carousel1/BROCODE.png';
import cadCreate from '../images/Carousel1/cad-0-create.png';
import electrothon from '../images/Carousel1/electrothon.png';
import error404 from "../images/Carousel1/error404.png"
import geek from "../images/Carousel1/geek.png"
import ipl from "../images/Carousel1/ipl.png"
import mindmaster from "../images/Carousel1/mindmasters.png"
import rccarautoexpo from "../images/Carousel1/rccarautoexpo.png"
import solveX from "../images/Carousel1/solvex.png"
import treasurehunt from "../images/Carousel1/treasureHunt.png"
import valorant from "../images/Carousel1/valorant.png"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, src: technovateMain, alt: "Technovate Main" },
    { id: 2, src: bgmi, alt: "BGMI Tournament" },
    { id: 3, src: bridgingMinds, alt: "Bridging Minds" },
    { id: 4, src: brocode, alt: "BroCode Competition" },
    { id: 5, src: cadCreate, alt: "CAD Create" },
    { id: 6, src: electrothon, alt: "Electrothon" },
    { id: 7, src: error404, alt: "Error 404" },
    { id: 8, src: geek, alt: "Geek" },
    { id: 9, src: ipl, alt: "IPL" },
    { id: 10, src: mindmaster, alt: "Mind Masters" },
    { id: 11, src: rccarautoexpo, alt: "RC Car Auto Expo" },
    { id: 12, src: solveX, alt: "Solve X" },
    { id: 13, src: treasurehunt, alt: "Treasure Hunt" },
    { id: 14, src: valorant, alt: "Valorant" }
  ];

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
<div className="relative w-full max-w-[90vw] mx-auto my-4 md:max-w-[1200px]">
  {/* Carousel container */}
  <div className="relative w-full overflow-hidden rounded-lg">
    {/* Slides - height will be determined by image content */}
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`transition-opacity duration-700 ease-in-out ${
          index === currentSlide ? 'opacity-100 block' : 'opacity-0 hidden'
        }`}
      >
        <img
          src={slide.src}
          className="w-full h-auto max-h-[70vh] object-contain mx-auto"
          alt={slide.alt}
        />
      </div>
    ))}

    {/* Slider indicators */}
    {/* Completely hidden but functional indicators */}
<div className="absolute inset-0 flex">
  {slides.map((_, index) => (
    <button
      key={index}
      type="button"
      className="w-full h-full opacity-0 cursor-default"
      onClick={() => goToSlide(index)}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>
  </div>
</div>
  );
};

export default Carousel;