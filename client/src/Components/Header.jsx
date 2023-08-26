import React from "react";

export default function Header() {
  return (
    <nav className="flex w-full gap-6 p-6">
      <a href="/">
        <img src="/logo.svg" alt="Logo" className="h-6" />
      </a>
    </nav>
  );
}
