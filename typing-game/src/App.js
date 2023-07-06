import { useState, useEffect, useRef } from "react";
import TimerIcon from '@mui/icons-material/Timer';
import React from "react";

function App() {

  const STARTING_TIME = 30
    
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textareaRef = useRef(null)

    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        textareaRef.current.disabled = false
        textareaRef.current.focus()
    }
    
    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])
    

  return (
        <div className="main">
            <div className="main-timer">
                <TimerIcon sx={{fontSize: 40}}/>
                <h4> {timeRemaining} sec</h4>
            </div>
            
            <h1>HOW FAST DO YOU TYPE?</h1>
            
            
            <textarea
                ref={textareaRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <div className="mail-results">
                <button 
                    onClick={startGame}
                    disabled={isTimeRunning}
                >
                    Start
                </button>
                <h1>Word count: {wordCount}</h1>
            </div>
            
        </div>
  );
}

export default App;
