import { useState } from "react";
import "../styles/AnswerButtons.css"

interface AnswerButtonsProps {
    selectionChangedCallback: (option: string) => void,
    answer1: string,
    answer2: string,
    answer3: string,
    answer4: string
}

function AnswerButtons({selectionChangedCallback, answer1, answer2, answer3, answer4}: AnswerButtonsProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    const selectOption = (option: string) => {
        setSelectedAnswer(option);
        selectionChangedCallback(option);
    }

    const getOptionClassName = (option: string) => {
        if (selectedAnswer === option)
            return "answer-btn answer-btn-selected";
        else
            return "answer-btn"
    }

    return (
        <div className='answers-container'>
            <div onClick={() => selectOption(answer1)} className={getOptionClassName(answer1)}>{answer1}</div>
            <div onClick={() => selectOption(answer2)} className={getOptionClassName(answer2)}>{answer2}</div>
            <div onClick={() => selectOption(answer3)} className={getOptionClassName(answer3)}>{answer3}</div>
            <div onClick={() => selectOption(answer4)} className={getOptionClassName(answer4)}>{answer4}</div>
        </div>
    )
}

export default AnswerButtons;