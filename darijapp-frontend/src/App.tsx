import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SettingsPage from './pages/SettingsPage';
import NavbarMenu from './components/NavBarMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QuizSelection from './pages/QuizSelection';
import QuizQuestion from './pages/QuizQuestion';
import { GetQuestions } from './helpers/ApiHelper';

function App() {
    const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
    const questions = GetQuestions([]); // temporary as fuck
    return (
        <BrowserRouter>
            <nav><Navbar menuOpenState={{ value: navMenuOpen, setValue: setNavMenuOpen }} /></nav>
            <main>
                {navMenuOpen ? <NavbarMenu menuOpenState={{ value: navMenuOpen, setValue: setNavMenuOpen }} /> : <></>}
                <div className='route-container' onClick={() => setNavMenuOpen(false)}>
                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/quiz' element={<QuizSelection />} />
                        <Route path='/settings' element={<SettingsPage />} />
                        <Route path="/test" element={<QuizQuestion question={questions[2]} />} />
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App
