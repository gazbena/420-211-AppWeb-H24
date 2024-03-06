import "./NavBar.css"

export default function Navbar() {
    return (
        <nav>
            <img src="./logo192.png" alt="react-logo" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">Cours React - Projet 1</h4>
        </nav>
    );
}