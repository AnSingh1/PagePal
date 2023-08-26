import React from "react";

export default function Card({ children }) {
  return (
    <div className="flex flex-col items-center gap-8 rounded-2xl bg-white px-12 py-8 shadow">
      {children}
    </div>
  );
}
