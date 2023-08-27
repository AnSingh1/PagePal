import React from "react"

export default function Card({ heading, desc }) {
  const header = {
    display: 'flex',
    justifyContent: 'center'
  };
  const text = {
    maxWidth: '500px',
    textAlign: 'justify'
  };
  return (
  <>
    <h2>{heading}</h2>
    <p style={text}>{desc}</p>
  </>
  );
}