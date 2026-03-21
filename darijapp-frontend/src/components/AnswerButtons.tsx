import { useState } from "react";
import "../styles/AnswerButtons.css"
import { DisplayExpression as DisplayAnswer, type Answer } from "../models/Question";
import type { StateObject } from "../helpers/StateObject";
import { FitText } from "./FitText";

interface AnswerButtonsProps {
    answers: Answer[],
    selectedAnswerState: StateObject<Answer | null>
}

function AnswerButtons({ answers, selectedAnswerState }: AnswerButtonsProps) {
    const [selectedAnswer, setSelectedAnswer] = selectedAnswerState ? [selectedAnswerState.value, selectedAnswerState.setValue] : useState<Answer | null>(null);

    const getOptionClassName = (answer: Answer) => {
        if (selectedAnswer?.id === answer.id)
            return "answer-btn answer-btn-selected";
        else
            return "answer-btn"
    }

    return (
        <div className='answers-container'>
            {answers.map(answer =>
                <div onClick={() => setSelectedAnswer(answer)} key={answer.id} className={getOptionClassName(answer)}>
                    {DisplayAnswer(answer)}
                </div>
            )}
        </div>
    )
}

export default AnswerButtons;