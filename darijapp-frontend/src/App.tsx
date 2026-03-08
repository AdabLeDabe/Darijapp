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
    return (
        <>
            <nav><Navbar /></nav>
            <main><QuizSelection /></main>
        </>
    )
}

export default App
