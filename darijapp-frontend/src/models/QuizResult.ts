import type { Answer, Question } from "./Question";

export interface QuestionResult {
    question: Question,
    selectedAnswer: Answer,
    correctAnswer: Answer
}