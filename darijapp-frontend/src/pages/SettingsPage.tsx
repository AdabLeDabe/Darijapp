import "../styles/SettingsPage.css"
import { useState } from "react";
import ToggleButtons from "../components/ToggleButtons";
import ReactSwitch from "react-switch";
import { getCssVar } from "../helpers/CssHelper";
import TranscriptDisplay from "../components/TranscriptDisplay";

function SettingsPage() {
    const [selectedDialect, setSelectedDialect] = useState<string>("");
    const [showShortVowels, setShowShortVowels] = useState<boolean>(false);

    return (
        <>
            <div className="settings-page-container">
                <div className="dialect-selection">
                    <div className="label">Dialecte de préférence</div>
                    <div className="toggle-button">
                        <ToggleButtons selectionChangedCallback={setSelectedDialect} option1="Maroc" option2="Algérie" option3="Tunisie" />
                    </div>
                </div>
                <div className="display-type">
                    <div className="label">Affichage des expressions</div>

                    <div>
                        <input type="radio" id="phonetic_arabic" name="display-type" value="phonetic_arabic" />
                        <label htmlFor="phoentic_araibc">Phonétique et arabe</label>
                    </div>
                    <div>
                        <input type="radio" id="phonetic_only" name="display-type" value="phonetic_only" />
                        <label htmlFor="phonetic_only">Phonétique seulement</label>
                    </div>
                    <div>
                        <input type="radio" id="arabic_only" name="display-type" value="arabic_only" />
                        <label htmlFor="arabic_only">Arabe seulement</label>
                    </div>
                </div>
                <div className="vowel-type">
                    <div className="label">Affichage des voyelles courtes</div>
                    <div className="switch">
                        <ReactSwitch
                            checked={showShortVowels}
                            onChange={setShowShortVowels}
                            onColor={getCssVar("--color-main-green")}
                            offColor={getCssVar("--color-secondary")}
                            onHandleColor="#fff"
                            offHandleColor="#fff"
                            handleDiameter={22}
                            height={26}
                            width={50}
                            uncheckedIcon={false}
                            checkedIcon={false} />
                    </div>
                </div>
                <div className="preview">
                    <h2>Aperçu</h2>
                    <div className="transcript-display">
                        <TranscriptDisplay shortVowels={showShortVowels} mode={0}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingsPage;