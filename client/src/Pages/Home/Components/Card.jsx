import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="gap-12 rounded-2xl bg-white px-12 py-8 shadow">
      <h2 className="text-text-dark font-display text-2xl">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
