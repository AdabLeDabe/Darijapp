import type { QuestionType } from "../helpers/Types";
import type { Expression } from "./Expression";

export interface Question {
    type: QuestionType,
    expression: Expression,
    correctExpression: Expression,
    otherExpressions: Expression[]
}

export interface Answer {
    id: number,
    expression: Expression
}

export function GetShuffledAnswers(correctExpression: Expression, otherExpressions: Expression[]): Answer[] {
    const answers = [
        { id: 0, expression: correctExpression },
        { id: 1, expression: otherExpressions[0] },
        { id: 2, expression: otherExpressions[1] },
        { id: 3, expression: otherExpressions[2] }
    ];
    return answers.sort(() => Math.random() - 0.5);
}