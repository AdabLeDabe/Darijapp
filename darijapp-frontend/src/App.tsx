import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ToggleButtons from './components/ToggleButtons';
import AnswerButtons from './components/AnswerButtons';

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
                <button className='btn btn-secondary btn-small' type='button'>Tout déselectionner</button>
                <br />
                <br />
                <button className='btn btn-primary btn-big' type='button'>Commencez un quiz</button>
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
