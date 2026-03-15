import { useState } from "react";
import menuIcon from "../assets/menu.svg"
import "../styles/Navbar.css"
import type { StateObject } from "../helpers/StateObject";

interface NavbarProps {
    menuOpenState?: StateObject<boolean> | null
}

function Navbar({menuOpenState = null}: NavbarProps) {
    const [menuOpen, setMenuOpen] = menuOpenState ? [menuOpenState.value, menuOpenState.setValue] : useState<boolean>(false);

    return (
        <div className="navbar-contaier">
            <div className="navbar">
                <button className="menu-btn" type="button" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuIcon} alt="Menu" aria-hidden="true" className="menu-btn-icon" />
                </button>
                <h1>Darijapp</h1>
            </div>
        </div>
    )
}

export default Navbar;