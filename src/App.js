import React from "react";
import "./App.css";
import Sharktank from './pages/Sharktank';
import Techtreasurehunt from "./pages/techtreasurehunt"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./skeleton/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/sharktank"  element={<Sharktank /> }></Route>
        <Route exact path="/techtreasurehunt"  element={<Techtreasurehunt /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
