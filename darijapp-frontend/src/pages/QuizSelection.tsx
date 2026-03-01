import { useState } from "react";
import AppButton from "../components/AppButton";
import CategoryList from "../components/CategoryList";
import "../styles/QuizSelection.css"

function QuizSelection() {
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    
    const addOrRemoveCategory = (id: number) => {
        let newSelectedCategories = [...selectedCategories];
        if (newSelectedCategories.includes(id)) {
            newSelectedCategories = newSelectedCategories.filter(item => item != id);
        }
        else {
            newSelectedCategories.push(id);
        }
        setSelectedCategories(newSelectedCategories);
    }

    var unselectAll = () => {
        setSelectedCategories([]);
    }

    return (
        <>
            <div className="quiz-selection-container">
                <div className="selection-label">Sélectionnez une ou plusieurs thématiques:</div>
                <div className="categories">
                    <CategoryList selectedCategories={selectedCategories} updateSelectedCategories={addOrRemoveCategory}/>
                </div>
                <div className="unselect-menu">
                    <div>Thématiques sélectionnées: {selectedCategories.length}</div>
                    <AppButton onClick={unselectAll}>Tout déselectionner</AppButton>
                </div>
                <div className="validation">
                    <AppButton isBig={true} isPrimary={true} hasArrow={true}>Lancer le quiz</AppButton>
                </div>
            </div>
        </>
    )
}

export default QuizSelection;