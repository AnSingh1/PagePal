import React from "react";

export default function Card({ children }) {
  return (
    <div className="relative flex w-full max-w-md flex-col items-center gap-8 overflow-hidden rounded-2xl bg-white px-12 py-8 shadow">
      {children}
    </div>
  );
}
