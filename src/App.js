import React from "react";
import "./App.css";
import Sharktank from './pages/Sharktank';
import Techtreasurehunt from "./pages/techtreasurehunt"
import TheBroCode from "./pages/TheBroCode"
import Hireorfire from "./pages/Hireorfire" 
import FastnFurious from "./pages/fastnfurious"
import TechSangam from "./pages/TechSangam"
import CatiaWars from "./pages/catiawars"
import Mun from "./pages/Mun"
import BgmiValo from "./pages/BgmiValo"
import Ipl from "./pages/IplAuction"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./skeleton/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/sharktank"  element={<Sharktank /> }></Route>
        <Route exact path="/techtreasurehunt"  element={<Techtreasurehunt /> }></Route>
        <Route exact path="/thebrocode" element={<TheBroCode/>} ></Route>
        <Route exact path="/hireorfire" element={<Hireorfire/>} ></Route>
        <Route exact path="/fastnfurious" element={<FastnFurious/>} ></Route>
        <Route exact path="/techsangam" element={<TechSangam/>} ></Route>
        <Route exact path="/catiawars" element={<CatiaWars/>} ></Route>
        <Route exact path="/mun" element={<Mun/>} ></Route>
        <Route exact path="/bgmivalo" element={<BgmiValo/>} ></Route>
        <Route exact path="/iplauction" element={<Ipl/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
