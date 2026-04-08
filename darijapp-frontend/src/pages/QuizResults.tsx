import "../styles/QuizResults.css"
import type { QuestionResult } from "../models/QuestionResult"
import AppButton from "../components/AppButton"

interface QuizResultsProps {
    questionResults: QuestionResult[],
    restartQuizCallback: () => void
}

export function QuizResults({ questionResults, restartQuizCallback }: QuizResultsProps) {

    const getGoodAnswersNumber = () => {
        let number = 0;
        questionResults.forEach(questionResult => {
            console.log("correct answer: " + questionResult.correctAnswer.id);
            console.log("selected answer: " + questionResult.selectedAnswer.id);
            if (questionResult.correctAnswer.id === questionResult.selectedAnswer.id) {
                number++;
            }
        });
        return number;
    }

    return (
        <>
            <div className="quiz-results-container">
                <div className="title">
                    <h2>Terminé !</h2>
                </div>
                <div className="results">Vous avez obtenu {getGoodAnswersNumber()}/{questionResults.length}</div>
                <div className="results-details"></div>
                <div className="restart">
                    <AppButton
                        isPrimary={true}
                        isBig={true}
                        hasArrow={true}
                        onClick={() => restartQuizCallback()}>Commencer un nouveau quiz</AppButton>
                </div>
            </div>
        </>
    )
}