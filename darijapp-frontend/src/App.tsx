import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ToggleButtonsDialect from './components/ToggleButtonsDialect';

function App() {
    const [selectedDialect, setSelectedDialect] = useState<string>(""); //Temporary

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
                <ToggleButtonsDialect
                    selectionChangedCallback={setSelectedDialect}
                    option1='Maroc'
                    option2='Algérie'
                    option3='Tunisie' />
            </div>
        </>
    )
}

export default App
