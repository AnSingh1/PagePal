import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex w-full gap-6 p-6">
      <Link to="/">
        <img src="/logo.svg" alt="Logo" className="h-6" />
      </Link>
      <Link to="/about" className="text-text-light font-sans">
        About
      </Link>
    </nav>
  );
}
