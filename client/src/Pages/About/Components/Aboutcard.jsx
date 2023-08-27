import React from "react"

export default function Card({ heading, desc }) {
  const text = {
    maxWidth: '500px',
    fontSize: '16px',
    textAlign: 'justify',
    margin: '50px'
  };
  return (
  <>
    <h2>{heading}</h2>
    <p style={text}>{desc}</p>
  </>
  );
}