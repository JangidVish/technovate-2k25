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
import ScrollbarCarousel from "./parts/ScrolbarCarousel";
import Electrothon from "./pages/Electrothon";
import Autoexpo from "./pages/Autoexpo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/solvex"  element={<Sharktank /> }></Route>
        <Route exact path="/geekitout"  element={<Techtreasurehunt /> }></Route>
        <Route exact path="/thebrocode" element={<TheBroCode/>} ></Route>
        <Route exact path="/iplauction" element={<Hireorfire/>} ></Route>
        <Route exact path="/error404" element={<FastnFurious/>} ></Route>
        <Route exact path="/mindbridge" element={<TechSangam/>} ></Route>
        <Route exact path="/bgmi" element={<CatiaWars/>} ></Route>
        <Route exact path="/cadocreate" element={<Mun/>} ></Route>
        <Route exact path="/valorent" element={<BgmiValo/>} ></Route>
        <Route exact path="/rcrace" element={<Ipl/>} ></Route>
        <Route exact path="/electrothon" element={<Electrothon/>} ></Route>
        <Route exact path="/autoexpo" element={<Autoexpo/>} ></Route>
        <Route exact path="/scroll" element={<ScrollbarCarousel/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
