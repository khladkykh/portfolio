import React from "react";
import Question from "./components/Question";
import { nanoid } from "nanoid";

function App() {

  const [allQuestions, setallQuestions] = React.useState([])
   
     React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(results => setallQuestions(results.results))
    }, [])

    console.log(allQuestions)

    function status(){
      setallQuestions(oldQuestions => [...oldQuestions, {status: false}])
     
    }

    function shuffleAnswers(answers) {
      for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
      }
      return answers;
    }

    const questionEl = allQuestions.map(question => {
      const answers = shuffleAnswers([question.correct_answer, ...question.incorrect_answers]);
      return (
        <Question
          key={nanoid()}
          question={question.question}
          answers={answers}
        />
      );
    });
    
  return (
    <div className="App">
      {questionEl}
      <button className="answer-button" onClick={status}>Check answers</button>
    </div>
  );
}

export default App;
