import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ToggleButtons from './components/ToggleButtons';
import AnswerButtons from './components/AnswerButtons';
import AppButton from './components/AppButton';
import LandingPage from './pages/LandingPage';
import QuizQuestion from './pages/QuizQuestion';
import QuizSelection from './pages/QuizSelection';

function App() {
    //Temporary states for testing
    const [selectedDialect, setSelectedDialect] = useState<string>("");
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    return (
        <>
            <nav><Navbar /></nav>
            <main><LandingPage /></main>
        </>
    )
}

export default App
