import React from "react";

import Question from "../Question/index.js";

function ListQuestions({ quizObjectsArray = [] }) {
  console.log(quizObjectsArray);
  return (
    <ol>
      {quizObjectsArray.map(quizObject => (
        <Question question={quizObject.question} />
      ))}
    </ol>
  );
}

export default ListQuestions;
