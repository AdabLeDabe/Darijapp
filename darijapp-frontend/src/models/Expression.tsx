import { FitText } from "../components/FitText";
import { removeArabicShortVowels } from "../helpers/ArabicHelper";
import type { DisplayType } from "../helpers/Types";

export abstract class Expression {
    abstract DisplayExpression(showShortVowels: boolean, displayType: DisplayType): React.ReactNode;
}

export class FrenchExpression extends Expression {
    expression: string;

    constructor(expression: string) {
        super();
        this.expression = expression;
    }

    DisplayExpression(showShortVowels: boolean, displayType: DisplayType): React.ReactNode {
        return <FitText text={this.expression} />
    }
}

export class ArabicExpression extends Expression {
    phoneticExpression: string;
    arabicExpression: string;

    constructor(phonetic: string, arabic: string) {
        super();
        this.phoneticExpression = phonetic;
        this.arabicExpression = arabic;
    }

    private displayPhonetic() {
        return <FitText text={this.phoneticExpression} />;
    }

    private displayArabic(showShortVowels: boolean) {
        if (showShortVowels)
            return <div>{this.arabicExpression}</div>
        else
            return <div>{removeArabicShortVowels(this.arabicExpression)}</div>
    }

    private displayTranscript(showShortVowels: boolean, displayType: DisplayType) {
        switch (displayType) {
            case "phonetic":
                return <>{this.displayPhonetic()}</>
            case "arabic":
                return <>{this.displayArabic(showShortVowels)}</>
            default:
                return (
                    <>
                        {this.displayPhonetic()}
                        {this.displayArabic(showShortVowels)}
                    </>
                )
        }
    }

    DisplayExpression(showShortVowels: boolean, displayType: DisplayType): React.ReactNode {
        return this.displayTranscript(showShortVowels, displayType);
    }
}