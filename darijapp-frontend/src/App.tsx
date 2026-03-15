import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SettingsPage from './pages/SettingsPage';
import NavbarMenu from './components/NavBarMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QuizSelection from './pages/QuizSelection';

function App() {
    const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
    return (
        <BrowserRouter>
            <nav><Navbar menuOpenState={{ value: navMenuOpen, setValue: setNavMenuOpen }} /></nav>
            <main>
                {navMenuOpen ? <NavbarMenu menuOpenState={{ value: navMenuOpen, setValue: setNavMenuOpen }} /> : <></>}
                <div onClick={() => setNavMenuOpen(false)}>
                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/quiz' element={<QuizSelection />} />
                        <Route path='/settings' element={<SettingsPage />} />
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App
