import Navbar from "./Navbar";
import Logo from "./Logo";
import "./Header.css";


function Header() {
    return (
        <header>
            <div className="header-wrapper">
                <Logo />
                <Navbar />
            </div>
        </header>
    );
}

export default Header;