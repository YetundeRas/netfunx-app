import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./assets/pages/mainpage/Mainpage";
import Signin from "./assets/pages/signin/Signin";
import "./App.css";
import Help from "./assets/pages/help/Help";
import Faq from "./assets/pages/faq/Faq";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faq" element={<Faq /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
