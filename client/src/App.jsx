import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Test from "./Pages/Test/Test";

export default function App() {
  return (
    <div className="max-w-screen flex min-h-screen w-full flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}
