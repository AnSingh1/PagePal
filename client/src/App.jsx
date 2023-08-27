import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Test from "./Pages/Test/Test";
import About from "./Pages/About/About"

export default function App() {
  return (
    <div className="max-w-screen flex min-h-screen w-full flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <img
                className="m-auto"
                src="https://media.tenor.com/Oj5ZvMbnFRQAAAAC/dog.gif"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
