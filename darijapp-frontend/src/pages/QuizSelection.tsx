import AppButton from "../components/AppButton";
import CategoryButton from "../components/CategoryButton";
import "../styles/QuizSelection.css"

function QuizSelection() {
    return (
        <>
            <div className="quiz-selection-container">
                <div className="selection-label">Sélectionnez une ou plusieurs thématiques:</div>
                <div className="categories">
                    <CategoryButton title="Test" description="Infect Itarod baroun, se noth as to que wild y thought a proppon they uporplop ime manit." id={0} />
                    <CategoryButton title="Test" description="Infect Itarod baroun, se noth as to que wild y thought a proppon they uporplop ime manit." id={0} />
                    <CategoryButton title="Test" description="Infect Itarod baroun, se noth as to que wild y thought a proppon they uporplop ime manit." id={0} />
                    <CategoryButton title="Test" description="Infect Itarod baroun, se noth as to que wild y thought a proppon they uporplop ime manit." id={0} />
                </div>
                <div className="unselect-menu">
                    <div>Thématiques sélectionnées: 2</div>
                    <AppButton>Tout déselectionner</AppButton>
                </div>
                <div className="validation">
                    <AppButton isBig={true} isPrimary={true} hasArrow={true}>Lancer le quiz</AppButton>
                </div>
            </div>
        </>
    )
}

export default QuizSelection;