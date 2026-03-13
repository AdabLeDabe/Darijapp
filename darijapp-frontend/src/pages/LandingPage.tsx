import ToggleButtons from "../components/ToggleButtons";
import "../styles/LandingPage.css"
import AppButton from "../components/AppButton";

function LandingPage() {
    return (
        <>
            <div className="landing-page-container">
                <div className="title-label">
                    <h2>Enrichissez votre vocabulaire en darija !</h2>
                </div>
                <div className="dialect-selection">
                    <div className="label">Sélectionnez un pays pour privilégier le dialecte spécifique à celui-ci:</div>
                    <ToggleButtons
                        option1='Maroc'
                        option2='Algérie'
                        option3='Tunisie' />
                </div>
                <div className="start-button">
                    <AppButton isPrimary={true} isBig={true} hasArrow={true}>Commencer un quiz</AppButton>
                </div>
            </div>
        </>
    )
}

export default LandingPage;