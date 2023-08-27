import React, { useRef, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Loading from "../../Components/Loading";
import Question from "./Components/Question";
import Finish from "./Components/Finish";

import tempData from "./tempQuestions.json" assert { type: "json" }; // TEMP UNTIL GENERATION

export default function Test() {
  const formRef = useRef();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState([]);
  const [finished, setFinished] = useState(false);
  const [numCorrect, setNumCorrect] = useState();

  // const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const generateQuestions = async (form) => {
    // GENERATE QUESTIONS

    const response = await fetch("/generate", {
      method: "POST",
      body: form,
    });

    const data = await response.json();
    if ("error" in data) return setError("Could not find summary.");
    // const data = tempData;

    setQuestions(data["questions"]);
    setLoading(false);
  };

  const onSubmit = async (_) => {
    if (finished) return navigate("/");

    window.scrollTo({ top: 0 });

    setError("");

    const questionNodes = formRef.current.querySelectorAll("#QUESTION");
    const answers = [...questionNodes].reduce((a, c) => {
      const o = c.querySelector("input[type='radio']:checked")?.id;
      if (!o) return a;

      return [...a, parseInt(o.substring(o.indexOf("_") + 1))];
    }, []);

    if (answers.length !== questions.length)
      return setError("Please answer every question.");

    const correctAnswers = questions.reduce((a, c) => [...a, c.answer], []);
    const correct = correctAnswers.reduce(
      (a, c, i) => (c === answers[i] ? ++a : a),
      0,
    );

    // setLoading(true);

    // await new Promise((r) => setTimeout(r, 2000));

    // setLoading(false);
    setFinished(true);
    setNumCorrect(correct);
  };

  useEffect((_) => {
    const formData = new FormData();

    Object.keys(sessionStorage).forEach((k) =>
      formData.append(k, sessionStorage.getItem(k)),
    );

    // for (const entry of searchParams.entries())
    //   formData.append(entry[0], entry[1]);

    generateQuestions(formData);
  }, []);

  return (
    <div className="relative flex h-full w-full flex-grow flex-col items-center py-6">
      {loading && <Loading />}
      <form className="flex w-full flex-col items-center gap-6" ref={formRef}>
        {questions.map((q, i) => {
          return <Question key={i} data={q} index={i} showResults={finished} />;
        })}
      </form>
      {!loading && (
        <button
          onClick={onSubmit}
          className="my-6 rounded-md bg-brand/80 px-4 py-2 font-sans text-white transition-colors hover:bg-brand"
        >
          {!finished ? "Submit" : "Return Home"}
        </button>
      )}
      {error && (
        <span className="font-roboto text-sm text-red-500">{error}</span>
      )}
      {numCorrect !== undefined && (
        <Finish correct={numCorrect} total={questions.length} />
      )}
    </div>
  );
}
