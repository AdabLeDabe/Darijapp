import { useEffect, useState } from "react";
import AnswerButtons from "../components/AnswerButtons";
import "../styles/QuizQuestion.css"
import AppButton from "../components/AppButton";
import TranscriptDisplay from "../components/TranscriptDisplay";
import { GetShuffledAnswers, type Answer, type Question } from "../models/Question";

interface QuizQuestionProps {
    question: Question,
    nextQuestionCallback: (selectedAnswer: Answer, correctAnswer: Answer) => void
}

function QuizQuestion({ question, nextQuestionCallback }: QuizQuestionProps) {
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
    const [answerValidated, setAnswerValidated] = useState<boolean>(false);

    useEffect(() => {
        setSelectedAnswer(null);
        setAnswerValidated(false);
        setAnswers(GetShuffledAnswers(question.correctExpression, question.otherExpressions));
    }, [question])

    return (
        <>
            <div className="quiz-question-container">
                <div className="question-label">
                    {question.type === "A2F"
                    ? <h2>Traduisez l'expression suivante en français:</h2>
                    : <h2>Traduisez l'expression suivante en darija:</h2>}
                </div>
                <TranscriptDisplay expression={question.expression} />
                <div className="answers">
                    <AnswerButtons
                        selectedAnswerState={{ value: selectedAnswer, setValue: setSelectedAnswer }}
                        answerValidatedState={{value: answerValidated, setValue: setAnswerValidated}}
                        answers={answers} />
                </div>
                <div className="validation">
                    {answerValidated ?
                        <AppButton
                            isPrimary={true}
                            isBig={true}
                            hasArrow={true}
                            onClick={() => nextQuestionCallback(selectedAnswer ?? answers[1], answers[0])}>Continuer</AppButton>
                        :
                        <AppButton
                            isPrimary={true}
                            isBig={true}
                            hasArrow={true}
                            disabled={selectedAnswer == null}
                            onClick={() => setAnswerValidated(true)}>Valider</AppButton>}
                </div>
            </div>
        </>
    )
}

export default QuizQuestion;