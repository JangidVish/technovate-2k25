import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./skeleton/main";
import Sharktank from "./pages/Sharktank";
import Techtreasurehunt from "./pages/techtreasurehunt";
import TheBroCode from "./pages/TheBroCode";
import Hireorfire from "./pages/Hireorfire";
import FastnFurious from "./pages/fastnfurious";
import TechSangam from "./pages/TechSangam";
import CatiaWars from "./pages/catiawars";
import Mun from "./pages/Mun";
import BgmiValo from "./pages/BgmiValo";
import Ipl from "./pages/IplAuction";
import ScrollbarCarousel from "./parts/ScrolbarCarousel";
import Electrothon from "./pages/Electrothon";
import Autoexpo from "./pages/Autoexpo";
import MindMaster from "./pages/MindMaster";
import Teams from "./pages/Teams";  


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/solvex" element={<Sharktank />} />
        <Route exact path="/geekitout" element={<Techtreasurehunt />} />
        <Route exact path="/thebrocode" element={<TheBroCode />} />
        <Route exact path="/iplauction" element={<Hireorfire />} />
        <Route exact path="/error404" element={<FastnFurious />} />
        <Route exact path="/mindbridge" element={<TechSangam />} />
        <Route exact path="/bgmi" element={<CatiaWars />} />
        <Route exact path="/cadocreate" element={<Mun />} />
        <Route exact path="/valorent" element={<BgmiValo />} />
        <Route exact path="/rcrace" element={<Ipl />} />
        <Route exact path="/electrothon" element={<Electrothon />} />
        <Route exact path="/treasurehunt" element={<Autoexpo />} />
        <Route exact path="/scroll" element={<ScrollbarCarousel />} />
        <Route exact path="/mindmaster" element={<MindMaster />} />
        <Route exact path="/teams" element={<Teams />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
