import { useState } from "react";
import type { Answer, Question } from "../models/Question";
import { GetQuestions } from "../helpers/ApiHelper";
import QuizSelection from "./QuizSelection";
import QuizQuestion from "./QuizQuestion";
import type { QuestionResult } from "../models/QuestionResult";
import { QuizResults } from "./QuizResults";

export function QuizProcess() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);
    const [questionResults, setQuestionsResults] = useState<QuestionResult[]>([]);
    const [quizDone, setQuizDone] = useState<boolean>(false);

    const categoriesSelected = (selectedCategories: number[]) => {
        setQuestions(GetQuestions(selectedCategories));
    }

    const goToNextQuestion = (selectedAnswer: Answer, correctAnswer: Answer) => {
        questionResults.push({
            question: questions[currentQuestionId],
            selectedAnswer: selectedAnswer,
            correctAnswer: correctAnswer
        })
        if (currentQuestionId >= questions.length - 1) {
            setQuizDone(true);
        }
        else {
            setCurrentQuestionId(currentQuestionId + 1);
        }
    }

    const restartQuiz = () => {
        setQuestions([]);
        setQuestionsResults([]);
        setCurrentQuestionId(0);
        setQuizDone(false);
    }

    return (
        <>
            {questions.length == 0
                ? <QuizSelection categoriesSelectedCallback={categoriesSelected} />
                : quizDone
                    ? <QuizResults questionResults={questionResults} restartQuizCallback={restartQuiz} />
                    : <QuizQuestion question={questions[currentQuestionId]} nextQuestionCallback={goToNextQuestion} />
            }
        </>
    );
}