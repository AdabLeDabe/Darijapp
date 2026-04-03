import { FitText } from "../components/FitText";
import type { QuestionType } from "../helpers/Types";
import type { ArabicExpression } from "./ArabicExpression";

export interface Question {
    type: QuestionType,
    expression: string | ArabicExpression,
    correctExpression: string | ArabicExpression,
    otherExpressions: string[] | ArabicExpression[]
}

export interface Answer {
    id: number,
    expression: string | ArabicExpression
}

export function IsArabicExpression(answer: any): answer is ArabicExpression {
    return answer.phonetic !== undefined;
}

export function DisplayExpression(answer: Answer) {
    if (IsArabicExpression(answer.expression)) {
        return (
            <>
                <FitText text={answer.expression.phonetic} />
                <div>{answer.expression.arabic}</div>
            </>
        );
    }
    else {
        return (
            <>
                <FitText text={answer.expression} />
            </>
        )
    }
}

export function GetShuffledAnswers(correctExpression: string | ArabicExpression, otherExpressions: string[] | ArabicExpression[]): Answer[] {
    const answers = [
        { id: 0, expression: correctExpression},
        { id: 1, expression: otherExpressions[0]},
        { id: 2, expression: otherExpressions[0]},
        { id: 3, expression: otherExpressions[0]}
    ];
    return answers.sort(() => Math.random() - 0.5);
}