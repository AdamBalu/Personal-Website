import './Welcome.css';

function Welcome() {
    return (
        <div className="hero-div">
            <p className="welcome-item welcome-hello">{'{{'} Programmer {'}}'}</p>
            <p className="welcome-item welcome-letter-a">A</p>
            <p className="welcome-item welcome-rest-of-the-name">dam Balušeskul</p>
            <p className="welcome-item welcome-welcome-to-website">~launching personal_website.exe~</p>
        </div>
    );
}

export default Welcome;