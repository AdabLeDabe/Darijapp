import { useLocalStorageState } from "../helpers/AppCache";
import { removeArabicShortVowels } from "../helpers/ArabicHelper";
import type { StateObject } from "../helpers/StateObject";
import "../styles/TranscriptDisplay.css"
import type { DisplayType } from "../helpers/Types";

interface TranscriptDisplayProps {
    shortVowelsState?: StateObject<boolean> | null,
    displayTypeState?: StateObject<DisplayType> | null
}

function TranscriptDisplay({ shortVowelsState = null, displayTypeState = null}: TranscriptDisplayProps) {
    const phoneticString = "əs-salām-u ɛlay-kum";
    const arabicString = "السَّلَامُ عَلَيكُم";
    const [showShortVowels, setShowShortVowels] = shortVowelsState ? [shortVowelsState.value, shortVowelsState.setValue] : useLocalStorageState("display-short-vowels", true);
    const [displayType, setDisplayType] = displayTypeState ? [displayTypeState.value, displayTypeState.setValue] : useLocalStorageState<DisplayType>("display-type", "both");

    const displayPhonetic = () => {
        return <div className="transcript-text">{phoneticString}</div>;
    }

    const displayArabic = () => {
        if (showShortVowels)
            return <div className="transcript-text">{arabicString}</div>
        else
            return <div className="transcript-text">{removeArabicShortVowels(arabicString)}</div>
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
            <div className="transcript">
                {displayTranscript()}
            </div>
        </>
    );
}

export default TranscriptDisplay;