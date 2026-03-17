import { useState } from "react";
import AnswerButtons from "../components/AnswerButtons";
import "../styles/QuizQuestion.css"
import AppButton from "../components/AppButton";
import TranscriptDisplay from "../components/TranscriptDisplay";

function QuizQuestion() {
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    return (
        <>
            <div className="quiz-question-container">
                <div className="question-label">
                    <h2>Traduisez l'expression suivante en français:</h2>
                </div>
                <TranscriptDisplay expression={{phonetic: "əs-salām-u ɛlay-kum", arabic: "السَّلَامُ عَلَيكُم"}} />
                <div className="answers">
                    <AnswerButtons
                        selectionChangedCallback={setSelectedAnswer}
                        answer1="Je m'appelle"
                        answer2='Bonjour'
                        answer3='Au revoir'
                        answer4='Comment va-tu' />
                </div>
                <div className="validation">
                    <AppButton isPrimary={true} isBig={true} hasArrow={true}>Valider</AppButton>
                </div>
            </div>
        </>
    )
}

export default QuizQuestion;