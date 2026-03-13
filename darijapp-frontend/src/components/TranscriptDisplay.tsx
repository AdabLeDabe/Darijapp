import { removeArabicShortVowels } from "../helpers/ArabicHelper";
import type { DisplayType } from "../helpers/DisplayType";
import "../styles/TranscriptDisplay.css"

interface TranscriptDisplayProps {
    shortVowels: boolean,
    mode: DisplayType
}

function TranscriptDisplay({ shortVowels, mode }: TranscriptDisplayProps) {
    const phoneticString = "əs-salām-u ɛlay-kum";
    const arabicString = "السَّلَامُ عَلَيكُم";

    const displayPhonetic = () => {
        return <div className="transcript-text">{phoneticString}</div>;
    }

    const displayArabic = () => {
        if (shortVowels)
            return <div className="transcript-text">{arabicString}</div>
        else
            return <div className="transcript-text">{removeArabicShortVowels(arabicString)}</div>
    }

    const displayTranscript = () => {
        switch (mode) {
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