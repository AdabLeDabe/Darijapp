import { FitText } from "../components/FitText";
import { removeArabicShortVowels } from "../helpers/ArabicHelper";
import type { DisplayType } from "../helpers/Types";

export abstract class Expression {
    abstract DisplayExpression(showShortVowels: boolean, displayType: DisplayType, isBig: boolean): React.ReactNode;
}

export class FrenchExpression extends Expression {
    expression: string;

    constructor(expression: string) {
        super();
        this.expression = expression;
    }

    DisplayExpression(showShortVowels: boolean, displayType: DisplayType, isBig: boolean): React.ReactNode {
        return <FitText text={this.expression} isBig={isBig} />
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

    private displayPhonetic(isBig: boolean) {
        return <FitText text={this.phoneticExpression} isBig={isBig} />;
    }

    private displayArabic(showShortVowels: boolean) {
        if (showShortVowels)
            return <div>{this.arabicExpression}</div>
        else
            return <div>{removeArabicShortVowels(this.arabicExpression)}</div>
    }

    private displayTranscript(showShortVowels: boolean, displayType: DisplayType, isBig: boolean) {
        switch (displayType) {
            case "phonetic":
                return <>{this.displayPhonetic(isBig)}</>
            case "arabic":
                return <>{this.displayArabic(showShortVowels)}</>
            default:
                return (
                    <>
                        {this.displayPhonetic(isBig)}
                        {this.displayArabic(showShortVowels)}
                    </>
                )
        }
    }

    DisplayExpression(showShortVowels: boolean, displayType: DisplayType, isBig: boolean): React.ReactNode {
        return this.displayTranscript(showShortVowels, displayType, isBig);
    }
}