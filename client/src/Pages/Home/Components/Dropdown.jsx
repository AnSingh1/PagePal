import React, { useRef } from "react";

export default function Dropdown({ options, onSubmit }) {
  const selectRef = useRef();

  return (
    <div className="flex gap-3">
      <select
        ref={selectRef}
        className="border-gray-border/[.08] text-text-light rounded-md border-[1px] px-4 py-2 font-sans"
      >
        {options.map((e, i) => {
          return (
            <option value={e} key={i}>
              {e}
            </option>
          );
        })}
      </select>
      <button
        onClick={(_) => onSubmit(selectRef.current.value)}
        className="bg-brand/80 hover:bg-brand rounded-md px-4 py-2 font-sans text-white transition-colors"
      >
        Go!
      </button>
    </div>
  );
}
