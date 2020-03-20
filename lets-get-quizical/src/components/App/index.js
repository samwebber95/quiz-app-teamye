import React, { useEffect, useState } from "react";
import "./App.css";

import Question from "../Question/index.js";
import ListQuestions from "../ListQuestions/index.js";

function App() {
  const [quizObject1, setQuizObject1] = useState({});
  const [quizObject2, setQuizObject2] = useState({});
  const [quizObject3, setQuizObject3] = useState({});
  const [quizObject4, setQuizObject4] = useState({});
  const [quizObject5, setQuizObject5] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=27&difficulty=medium&type=boolean"
      );
      const data = await response.json();
      console.log(data);
      setData(data);
      setQuizObject1(data.results[0]);
      setQuizObject2(data.results[1]);
      setQuizObject3(data.results[2]);
      setQuizObject4(data.results[3]);
      setQuizObject5(data.results[4]);
    }
    fetchAPI();
  }, []);

  const quizObjectsArray = [
    quizObject1,
    quizObject2,
    quizObject3,
    quizObject4,
    quizObject5
  ];
  console.log(Object.keys(quizObject1));

  return (
    <div className="App">
      <ListQuestions quizObjectsArray={quizObjectsArray} />
    </div>
  );
}

export default App;
