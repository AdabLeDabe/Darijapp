import { useLocalStorageState } from "../helpers/AppCache";
import { removeArabicShortVowels } from "../helpers/ArabicHelper";
import type { DisplayType } from "../helpers/DisplayType";
import "../styles/TranscriptDisplay.css"

function TranscriptDisplay() {
    const phoneticString = "əs-salām-u ɛlay-kum";
    const arabicString = "السَّلَامُ عَلَيكُم";
    const [showShortVowels, setShowShortVowels] = useLocalStorageState("display-short-vowels", true);
    const [displayType, setDisplayType] = useLocalStorageState<DisplayType>("display-type", "both");

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