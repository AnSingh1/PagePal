import React, { useState } from "react";

export default function Question({ data, index }) {
  const [selected, setSelected] = useState();

  const { question, options, correct, explanation } = data;

  return (
    <div className="font-display relative flex w-full max-w-xl flex-col gap-6 rounded-2xl bg-white px-12 py-8 shadow">
      <h3 className="text-text-dark text-lg">{question}</h3>
      <p className="bg-brand font-roboto absolute right-0 top-0 grid h-8 w-8 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full text-white md:-translate-y-1/3 md:translate-x-1/2">
        {index + 1}
      </p>
      <ul className="text-text-light flex flex-col gap-3 ">
        {options.map((o, i) => {
          return (
            <li key={i}>
              <input
                type="radio"
                id={`${index}_${i}`}
                name={index}
                onClick={(_) => setSelected(i)}
                className="mr-3"
              />
              <label htmlFor={`${index}_${i}`}>{o}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
