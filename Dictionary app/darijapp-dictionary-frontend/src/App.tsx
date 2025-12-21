import FrenchExpressionCreation from './components/FrenchExpressionCreation';
import FrenchExpressionsList from './components/FrenchExpressionsList';
import { useState } from 'react';
import type { FrenchWithTranslations } from './models/FrenchWithTranslations';
import EditionBar from './components/EditionBar';

function App() {
    const [isEditMode, setEditMode] = useState(false);
    const [selectedFrenchItem, setSelectedFrenchItem] = useState<FrenchWithTranslations | null>(null);

    function AddCallback() {
        setSelectedFrenchItem(null);
        setEditMode(true);
    }

    function EditCallBack() {
        setEditMode(true);
    }

    function ReturnCallback() {
        setEditMode(false);
    }

    return (
        <div className='main-container'>
            <EditionBar isEditMode={isEditMode} addCallback={AddCallback} returnCallBack={ReturnCallback}/>
            {isEditMode
                ? <FrenchExpressionCreation selectedWord={selectedFrenchItem} showTranslationsMenu={true} linkedArabicExpressionId={null} />
                : <FrenchExpressionsList selectedItem={selectedFrenchItem} setSelectedItem={setSelectedFrenchItem} editCallback={EditCallBack} />}
        </div>
    )
}

export default App
