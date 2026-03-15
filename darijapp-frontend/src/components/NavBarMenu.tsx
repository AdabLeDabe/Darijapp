import { useState } from "react";
import type { StateObject } from "../helpers/StateObject";
import "../styles/NavbarMenu.css"

interface NavbarMenuProps {
    menuOpenState?: StateObject<boolean> | null
}

function NavbarMenu({menuOpenState = null}: NavbarMenuProps) {
    const [menuOpen, setMenuOpen] = menuOpenState ? [menuOpenState.value, menuOpenState.setValue] : useState<boolean>(false);

    return (
            <>
                <div className="menu-list">
                    <div className="menu-list-element">Commencer un quiz</div>
                    <div className="menu-list-element">Paramètres</div>
                    <div className="menu-list-element menu-list-element-remaining" onClick={() => setMenuOpen(false)}></div>
                </div>
            </>
        )
}

export default NavbarMenu;