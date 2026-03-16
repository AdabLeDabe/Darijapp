import type { QuestionType } from "../helpers/Types";
import type { ArabicExpression } from "./ArabicExpression";

export interface QuestionF2A {
    type: QuestionType,
    expression: string
    correctAnswer: ArabicExpression,
    otherAnswers: ArabicExpression[]
};

export interface QuestionA2F {
    type: QuestionType,
    expression: ArabicExpression,
    correctAnswer: string,
    otherAnswers: string[]
};

export function GetShuffledAnswers<T>(correctAnswer: T, otherAnswers: T[]): T[] {
    const answers = [...otherAnswers, correctAnswer];
    return answers.sort(() => Math.random() - 0.5);
}