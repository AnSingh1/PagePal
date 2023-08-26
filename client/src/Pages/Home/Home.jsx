import React from "react";

import Card from "./Components/Card";
import Searchbar from "./Components/Searchbar";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-grow items-center justify-center">
      <img src="/books.svg" alt="" className="absolute -z-[1] h-[37.5vh]" />
      <Card>
        <h2 className="text-text-dark font-display text-2xl">
          Welcome to <span className="text-brand">PagePal</span>!
        </h2>
        <Searchbar />
      </Card>
    </div>
  );
}
