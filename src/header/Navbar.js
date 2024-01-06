

function Navbar() {
    return (
        <div className="group">
            <nav className="main-nav" id="navbar">
                <ul className="nav-list">
                    <li><a href="#about"><div className="glitch-item" title="HOME">Home</div></a></li>
                    <li><a href="#works">
                        <div className="glitch-item" title="WORKS">Works</div>
                    </a></li>
                    <li><a href="#works">
                        <div className="glitch-item" title="SKILLS">Skills</div>
                    </a></li>
                    <li><a href="#socials" className="hobbies-link">
                        <div className="glitch-item" title="SOCIALS">Socials</div>
                    </a></li>
                    <li><a href="#bd">
                        <div className="glitch-item" title="BD">bd</div>
                    </a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;