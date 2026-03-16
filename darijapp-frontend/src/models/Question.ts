import type { QuestionType } from "../helpers/Types";

export interface Question {
    type: QuestionType,
    correctAnswer: string,
    otherAnswers: string[]
};

export function GetShuffledAnswers(question: Question): string[] {
    const answers = [...question.otherAnswers, question.correctAnswer];
    return answers.sort(() => Math.random() - 0.5);
}