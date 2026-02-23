import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ToggleButtons from './components/ToggleButtons';
import AnswerButtons from './components/AnswerButtons';
import AppButton from './components/AppButton';

function App() {
    //Temporary states for testing
    const [selectedDialect, setSelectedDialect] = useState<string>("");
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    return (
        <>
            <Navbar />
            <div className='main-container'>
                <h2>Enrichissez votre vocabulaire en darija !</h2>
                <br />
                <AppButton isBig={true}>Test</AppButton>
                <br />
                <br />
                <AppButton>Tout déselectionner</AppButton>
                <br />
                <br />
                <AppButton isPrimary={true} isBig={true} hasArrow={true}>Commencez un quiz</AppButton>
                <br />
                <br />
                <ToggleButtons
                    selectionChangedCallback={setSelectedDialect}
                    option1='Maroc'
                    option2='Algérie'
                    option3='Tunisie' />
            </div>
            <AnswerButtons
                selectionChangedCallback={setSelectedAnswer}
                answer1="Je m'appelle"
                answer2='Bonjour'
                answer3='Au revoir'
                answer4='Comment va-tu' />
        </>
    )
}

export default App
