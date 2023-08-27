import React from "react";

import Confetti from "react-confetti";

import { useWindowSize } from "react-use";

export default function Finish({ correct, total }) {
  const { width, height } = useWindowSize();

  const correctPercent = Math.floor((correct / total) * 100);

  return (
    <div className="sticky bottom-0 flex w-full flex-col gap-6 overflow-hidden border-t-[1px] border-t-gray-border/[.08] bg-white p-6">
      {correctPercent > 75 && (
        <Confetti width={width} height={height} numberOfPieces={100} />
      )}
      <h2 className="font-open text-center text-xl text-text-dark">
        Test Complete!
      </h2>
      <div className="flex w-full items-center justify-center gap-3">
        <div className="h-8 w-full max-w-sm rounded-md bg-text-light/25">
          <div
            className="h-full rounded-md bg-brand"
            style={{ width: `${correctPercent}%` }}
          ></div>
        </div>
        <span className="font-roboto text-sm text-text-light">
          {correctPercent}%
        </span>
      </div>
    </div>
  );
}
