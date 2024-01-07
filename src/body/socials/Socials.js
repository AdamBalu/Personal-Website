import './Socials.css';

import { FaGithub, FaLinkedin, FaGitlab } from 'react-icons/fa';


const icons = [
    <FaGithub className="social-icon" />,
    <FaLinkedin className="social-icon" />,
    <FaGitlab className="social-icon" />
];

function Socials() {
    return (
        <div className="socials-wrapper">
            <h2 className="socials-heading">Socials</h2>
            <div className="socials-flexbox">
                {
                    Array.from({length: icons.length}, (_, index) => (
                        <a href="https://google.com" className="social-button">
                            {icons[index]}
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default Socials;
