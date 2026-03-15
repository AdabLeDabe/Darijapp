import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SettingsPage from './pages/SettingsPage';
import NavbarMenu from './components/NavBarMenu';

function App() {
    const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
    return (
        <>
            <nav><Navbar menuOpenState={{value: navMenuOpen, setValue: setNavMenuOpen}} /></nav>
            <main>
                {navMenuOpen ? <NavbarMenu menuOpenState={{value: navMenuOpen, setValue: setNavMenuOpen}}/> : <></>}
                <SettingsPage />
            </main>
        </>
    )
}

export default App
