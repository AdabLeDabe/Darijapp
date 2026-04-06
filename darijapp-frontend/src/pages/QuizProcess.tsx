import { useState } from "react";
import type { Answer, Question } from "../models/Question";
import { GetQuestions } from "../helpers/ApiHelper";
import QuizSelection from "./QuizSelection";
import QuizQuestion from "./QuizQuestion";
import type { QuestionResult } from "../models/QuizResult";

export function QuizProcess() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);
    const quizResults: QuestionResult[] = [];

    const categoriesSelected = (selectedCategories: number[]) => {
        setQuestions(GetQuestions(selectedCategories));
    }

    const goToNextQuestion = (selectedAnswer: Answer, correctAnswer: Answer) => {
        quizResults.push({
            question: questions[currentQuestionId],
            selectedAnswer: selectedAnswer,
            correctAnswer: correctAnswer
        })
        setCurrentQuestionId(currentQuestionId + 1);
    }

    return (
        <>
            {questions.length == 0
                ? <QuizSelection categoriesSelectedCallback={categoriesSelected} />
                : <QuizQuestion question={questions[currentQuestionId]} nextQuestionCallback={goToNextQuestion} />}
        </>
    );
}