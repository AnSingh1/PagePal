import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="border-b-gray-border/[.08] sticky top-0 z-50 flex w-full gap-6 border-b-[1px] bg-white p-6">
      <Link to="/">
        <img src="/logo.svg" alt="Logo" className="h-6" />
      </Link>
      <Link to="/about" className="text-text-light font-sans">
        About
      </Link>
    </nav>
  );
}
