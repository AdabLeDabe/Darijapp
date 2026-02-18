import menuIcon from "../assets/menu.svg"
import "../styles/Navbar.css"

function Navbar() {
    return (
        <>
            <header className="navbar">
                <button className="menu-btn" type="button">
                    <img src={menuIcon} alt="Menu" aria-hidden="true" className="menu-btn-icon" />
                </button>
                <h1>Darijapp</h1>
            </header>
        </>
    )
}

export default Navbar;