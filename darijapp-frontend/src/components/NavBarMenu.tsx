import { useState } from "react";
import type { StateObject } from "../helpers/StateObject";
import "../styles/NavbarMenu.css"
import { Link, useNavigate } from "react-router";


interface NavbarMenuProps {
    menuOpenState?: StateObject<boolean> | null
}

function NavbarMenu({ menuOpenState = null }: NavbarMenuProps) {
    const [menuOpen, setMenuOpen] = menuOpenState ? [menuOpenState.value, menuOpenState.setValue] : useState<boolean>(false);
    const navigate = useNavigate();

    const changePage = (page: string) => {
        setMenuOpen(false);
        navigate(page);
    }

    return (
        <>
            <div className="menu-list">
                <div className="menu-list-element" onClick={() => changePage("/quiz")}>Commencer un quiz</div>
                <div className="menu-list-element" onClick={() => changePage("/settings")}>Paramètres</div>
                <div className="menu-list-element menu-list-element-remaining" onClick={() => setMenuOpen(false)}></div>
            </div>
        </>
    )
}

export default NavbarMenu;