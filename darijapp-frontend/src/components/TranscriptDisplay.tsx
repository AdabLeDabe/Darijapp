import { useLocalStorageState } from "../helpers/AppCache";
import type { StateObject } from "../helpers/StateObject";
import "../styles/TranscriptDisplay.css"
import type { DisplayType } from "../helpers/Types";
import type { Expression } from "../models/Expression";

interface TranscriptDisplayProps {
    expression: Expression,
    shortVowelsState?: StateObject<boolean> | null,
    displayTypeState?: StateObject<DisplayType> | null,
    isSmall?: boolean
}

function TranscriptDisplay({ expression, shortVowelsState = null, displayTypeState = null, isSmall = false}: TranscriptDisplayProps) {
    const [showShortVowels, setShowShortVowels] = shortVowelsState ? [shortVowelsState.value, shortVowelsState.setValue] : useLocalStorageState("display-short-vowels", true);
    const [displayType, setDisplayType] = displayTypeState ? [displayTypeState.value, displayTypeState.setValue] : useLocalStorageState<DisplayType>("display-type", "both");

    const getContainerClassName = () => {
        return isSmall ? "transcript-container-small" : "transcript-container";
    }

    return (
        <>
            <div className={getContainerClassName()}>
                {expression.DisplayExpression(showShortVowels, displayType)}
            </div>
        </>
    );
}

export default TranscriptDisplay;