import { useState } from "react";
import "../styles/AnswerButtons.css"
import { DisplayExpression as DisplayAnswer, type Answer } from "../models/Question";
import type { StateObject } from "../helpers/StateObject";

interface AnswerButtonsProps {
    answers: Answer[],
    selectedAnswerState: StateObject<Answer | null>
}

function AnswerButtons({ answers, selectedAnswerState }: AnswerButtonsProps) {
    const [selectedAnswer, setSelectedAnswer] = selectedAnswerState ? [selectedAnswerState.value, selectedAnswerState.setValue] : useState<Answer | null>(null);

    const getOptionClassName = (answer: Answer) => {
        let classes = ["answer-btn"];

        if (selectedAnswer?.id === answer.id)
            classes.push("answer-btn-selected");

        // DEBUG
        if (answer?.id === 1)
            classes.push("answer-btn-correct")
        else if (answer?.id === 3)
            classes.push("answer-btn-wrong")

        return classes.join(' ');
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