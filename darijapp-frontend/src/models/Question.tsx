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
    const expressions = [...otherExpressions, correctExpression];
    var shuffledExpressions = expressions.sort(() => Math.random() - 0.5);
    return [
        { id: 0, expression: shuffledExpressions[0] },
        { id: 1, expression: shuffledExpressions[1] },
        { id: 2, expression: shuffledExpressions[2] },
        { id: 3, expression: shuffledExpressions[3] }
    ];
}