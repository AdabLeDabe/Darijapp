import { useState } from "react";
import menuIcon from "../assets/menu.svg"
import "../styles/Navbar.css"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const displayMenu = () => {
        if (!menuOpen)
            return <></>

        return (
            <>
                <div className="menu-list">
                    <div className="menu-list-element">Commencer un quiz</div>
                    <div className="menu-list-element">Paramètres</div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="navbar">
                <button className="menu-btn" type="button" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuIcon} alt="Menu" aria-hidden="true" className="menu-btn-icon" />
                </button>
                <h1>Darijapp</h1>
            </div>
            {displayMenu()}
        </>
    )
}

export default Navbar;