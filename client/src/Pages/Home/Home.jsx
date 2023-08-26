import React, { useState } from "react";

import Loading from "../../Components/Loading";
import Card from "./Components/Card";
import Searchbar from "./Components/Searchbar";
import Dropdown from "./Components/Dropdown";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState(1);
  const [options, setOptions] = useState([
    "Chapter 1",
    "Chapter 2",
    "Chapters 3 & 4",
    "Epilogue",
  ]); // TEMP

  const onSearch = (e) => {
    // setLoading(true);

    setSection(1);
  };

  const onSelect = (e) => {
    console.log(e);
  };

  const sections = [
    <Searchbar onSubmit={onSearch} />,
    <Dropdown onSubmit={onSelect} options={options} />,
  ];

  return (
    <div className="flex h-full w-full flex-grow items-center justify-center">
      <img
        src="/books.svg"
        alt=""
        className="absolute -z-[1] h-[37.5vh] translate-x-1/2"
      />
      <Card>
        {loading && <Loading />}
        <h2 className="text-text-dark font-display text-2xl">
          Welcome to <span className="text-brand">PagePal</span>!
        </h2>
        {sections[section]}
      </Card>
    </div>
  );
}
