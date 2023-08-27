import React from "react";

export default function Card({ heading, desc }) {
  return (
    <>
      <h2 className="font-display text-xl text-text-dark">{heading}</h2>
      <p className="mt-3 max-w-md font-sans text-text-light">{desc}</p>
    </>
  );
}
