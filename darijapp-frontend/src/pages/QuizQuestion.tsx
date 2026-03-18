import { useEffect, useState } from "react";
import AnswerButtons from "../components/AnswerButtons";
import "../styles/QuizQuestion.css"
import AppButton from "../components/AppButton";
import TranscriptDisplay from "../components/TranscriptDisplay";
import { GetShuffledAnswers, type Answer, type Question } from "../models/Question";

function QuizQuestion() {
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
    const question: Question =
    {
        type: "A2F",
        expression: { phonetic: "əs-salām-u ɛlay-kum", arabic: "السَّلَامُ عَلَيكُم" },
        correctExpression:
        {
            phonetic: "ṣbāḥ-əl-ẖīr",
            arabic: "صباح الخير"
        },
        otherExpressions: [
            {
                phonetic: "əs-salām-u ɛlay-kum",
                arabic: "السَّلَامُ عَلَيكُم"
            },
            {
                phonetic: "əs-salām-u ɛlay-kum",
                arabic: "السَّلَامُ عَلَيكُم"
            },
            {
                phonetic: "ẖədma",
                arabic: "خِدمة"
            }
        ]
    }; // Temporary of course

    useEffect(() => {
        setAnswers(GetShuffledAnswers(question.correctExpression, question.otherExpressions));
    }, [])

    return (
        <>
            <div className="quiz-question-container">
                <div className="question-label">
                    <h2>Traduisez l'expression suivante en français:</h2>
                </div>
                <TranscriptDisplay expression={{ phonetic: "əs-salām-u ɛlay-kum", arabic: "السَّلَامُ عَلَيكُم" }} />
                <div className="answers">
                    <AnswerButtons
                        selectedAnswerState={{ value: selectedAnswer, setValue: setSelectedAnswer }}
                        answers={answers} />
                </div>
                <div className="validation">
                    <AppButton isPrimary={true} isBig={true} hasArrow={true}>Valider</AppButton>
                </div>
            </div>
        </>
    )
}

export default QuizQuestion;