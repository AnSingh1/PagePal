import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../../Components/Loading";
import Card from "./Components/Card";
import Searchbar from "./Components/Searchbar";
import Dropdown from "./Components/Dropdown";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [section, setSection] = useState(0);
  const [responseData, setResponseData] = useState({});

  const navigate = useNavigate();

  const onSearch = async (e) => {
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("input", e);

    const response = await fetch("/initialize", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (Object.keys(data).length === 0) {
      setError("We couldn't find that book.");
      setLoading(false);

      return;
    }

    setResponseData(data);

    setSection(1);
    setLoading(false);
  };

  const onSelect = async (e) => {
    // const name = responseData.name.replaceAll(" ", "%20");
    // const link = responseData.link;
    // const chapter = e.replaceAll(" ", "%20");
    // const chapterLink = responseData.chapters[e];
    sessionStorage.setItem("name", responseData.name);
    sessionStorage.setItem("chapter", e);
    sessionStorage.setItem("chapterLink", responseData.chapters[e]);

    navigate(
      // `/test?name=${name}&link=${link}&chapter=${chapter}&chapterLink=${chapterLink}`,
      "/test",
    );
  };

  const sections = [
    <Searchbar onSubmit={onSearch} />,
    <Dropdown
      onSubmit={onSelect}
      options={Object.keys(responseData?.chapters || {})}
    />,
  ];

  return (
    <div className="flex h-full w-full flex-grow flex-col items-center justify-center gap-6">
      <img
        src="/books.svg"
        alt=""
        className="absolute -z-[1] h-[37.5vh] translate-x-0 sm:translate-x-1/2"
      />
      <Card>
        {loading && <Loading />}
        <h2 className="text-center font-display text-2xl text-text-dark">
          {(responseData && responseData.name) || (
            <span>
              Welcome to <span className="text-brand">PagePal</span>!
            </span>
          )}
        </h2>
        {sections[section]}
      </Card>
      {section === 1 && (
        <button
          onClick={(_) => navigate(0)}
          className="rounded-md bg-brand/80 px-4 py-2 font-sans text-white transition-colors hover:bg-brand"
        >
          Back
        </button>
      )}
      {error && (
        <span className="font-roboto text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
