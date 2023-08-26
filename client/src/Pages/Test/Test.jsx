import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Loading from "../../Components/Loading";
import Question from "./Components/Question";

import tempData from "./tempQuestions.json" assert { type: "json" }; // TEMP UNTIL GENERATION

export default function Test() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  const [searchParams] = useSearchParams();

  const generateQuestions = async (data) => {
    // GENERATE QUESTIONS

    // const response = await fetch("/generate", {
    //   method: "POST",
    //   body: data
    // })

    // const data = await response.data();

    setQuestions(tempData);
    setLoading(false);
  };

  useEffect((_) => {
    const formData = new FormData();
    for (const entry of searchParams.entries())
      formData.append(entry[0], entry[1]);

    generateQuestions(formData);
  }, []);

  return (
    <div className="relative flex h-full w-full flex-grow flex-col items-center gap-6 py-6">
      {loading && <Loading />}
      {questions.map((q, i) => {
        return <Question key={i} data={q} index={i} />;
      })}
    </div>
  );
}
