import React from "react";

export default function Loading({ dots = 3 }) {
  return (
    <div className="absolute top-0 z-50 flex h-full w-full items-center justify-center gap-4 bg-white">
      {[...Array(dots)].map((_, i) => {
        return (
          <div
            key={i}
            style={{ animationDelay: `${i * 100}ms` }}
            className="bg-text-light/10 h-4 w-4 animate-bounce rounded-full"
          ></div>
        );
      })}
    </div>
  );
}
