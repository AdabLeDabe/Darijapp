import { useState } from "react";
import "../styles/AnswerButtons.css"
import { type Answer } from "../models/Question";
import type { StateObject } from "../helpers/StateObject";
import { useLocalStorageState } from "../helpers/AppCache";
import type { DisplayType } from "../helpers/Types";

interface AnswerButtonsProps {
    answers: Answer[],
    selectedAnswerState: StateObject<Answer | null>,
    answerValidatedState: StateObject<boolean>
}

function AnswerButtons({ answers, selectedAnswerState, answerValidatedState }: AnswerButtonsProps) {
    const [selectedAnswer, setSelectedAnswer] = selectedAnswerState ? [selectedAnswerState.value, selectedAnswerState.setValue] : useState<Answer | null>(null);
    const [answerValidated, setAnswerValidated] = [answerValidatedState.value, answerValidatedState.setValue];
    const [showShortVowels, setShowShortVowels] = useLocalStorageState("display-short-vowels", true);
    const [displayType, setDisplayType] = useLocalStorageState<DisplayType>("display-type", "both");

    const getOptionClassName = (answer: Answer) => {
        let classes = ["answer-btn"];

        if (selectedAnswer?.id === answer.id)
            classes.push("answer-btn-selected");

        if (answerValidated) {
            if (selectedAnswer?.id === answer.id && answer?.id != 0)
                classes.push("answer-btn-wrong");
            if (answer?.id === 0)
                classes.push("answer-btn-correct")
        }

        return classes.join(' ');
    }

    return (
        <div className='answers-container'>
            {answers.map(answer =>
                <div onClick={() => setSelectedAnswer(answer)} key={answer.id} className={getOptionClassName(answer)}>
                    {answer.expression.DisplayExpression(showShortVowels, displayType)}
                </div>
            )}
        </div>
    )
}

export default AnswerButtons;