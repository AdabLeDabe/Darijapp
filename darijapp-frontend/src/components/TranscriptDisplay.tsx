import { useLocalStorageState } from "../helpers/AppCache";
import { removeArabicShortVowels } from "../helpers/ArabicHelper";
import type { StateObject } from "../helpers/StateObject";
import "../styles/TranscriptDisplay.css"
import type { DisplayType } from "../helpers/Types";
import type { ArabicExpression } from "../models/ArabicExpression";

interface TranscriptDisplayProps {
    expression: ArabicExpression,
    shortVowelsState?: StateObject<boolean> | null,
    displayTypeState?: StateObject<DisplayType> | null,
    isSmall?: boolean
}

function TranscriptDisplay({ expression, shortVowelsState = null, displayTypeState = null, isSmall = false}: TranscriptDisplayProps) {
    const [showShortVowels, setShowShortVowels] = shortVowelsState ? [shortVowelsState.value, shortVowelsState.setValue] : useLocalStorageState("display-short-vowels", true);
    const [displayType, setDisplayType] = displayTypeState ? [displayTypeState.value, displayTypeState.setValue] : useLocalStorageState<DisplayType>("display-type", "both");

    const getTextClassName = () => {
        return isSmall ? "transcript-text-small" : "transcript-text";
    }

    const getContainerClassName = () => {
        return isSmall ? "transcript-container-small" : "transcript-container";
    }

    const displayPhonetic = () => {
        return <div className={getTextClassName()}>{expression.phonetic}</div>;
    }

    const displayArabic = () => {
        if (showShortVowels)
            return <div className={getTextClassName()}>{expression.arabic}</div>
        else
            return <div className={getTextClassName()}>{removeArabicShortVowels(expression.arabic)}</div>
    }

    const displayTranscript = () => {
        switch (displayType) {
            case "phonetic":
                return <>{displayPhonetic()}</>
            case "arabic":
                return <>{displayArabic()}</>
            default:
                return (
                    <>
                        {displayPhonetic()}
                        {displayArabic()}
                    </>
                )
        }
    }

    return (
        <>
            <div className={getContainerClassName()}>
                {displayTranscript()}
            </div>
        </>
    );
}

export default TranscriptDisplay;