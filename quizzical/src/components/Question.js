import { nanoid } from "nanoid";

function Question(props) {

    return (
      <div className="container">
            <h1 className="question">{props.question}</h1>
            <div className="answer-container">
               {props.answers.map(answer => <div key={nanoid()} className="answer">{answer}</div>)}
            </div>
            
      </div>
    );
  }
  
  export default Question;
  