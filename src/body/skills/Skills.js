import {
    FaGithub, FaGitlab, FaPython, FaJs, FaReact,
    FaDatabase, FaHtml5, FaCss3, FaSass, FaAndroid, FaRust, FaFigma, FaStar, FaRegStar
} from 'react-icons/fa';

import {useState, useEffect} from 'react';
import './Skills.css'

const initialSkills = [
    [<FaGithub/>, 3],
    [<FaGitlab/>, 3],
    [<FaPython/>, 3],
    [<FaJs/>, 2],
    [<FaReact/>, 3],
    [<FaDatabase/>, 3],
    [<FaHtml5/>, 4],
    [<FaCss3/>, 3],
    [<FaSass/>, 2],
    [<FaAndroid/>, 3],
    [<FaRust/>, 3],
    [<FaFigma/>, 2]
]

function Skills() {
    const [skills, setSkills] = useState([]);


    // cycle through skills

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const firstSkill = skills[0];
    //         if (firstSkill) {
    //             const updatedSkills = [...skills.slice(1), firstSkill];
    //             setSkills(updatedSkills);
    //         }
    //     }, 2000);
    //
    //     return () => clearInterval(interval);
    // }, [skills]);


    useEffect(() => {
        setSkills(initialSkills);
    }, []);

    return (
        <div className="skill-list">
            <h2 className="skills-heading">Skills</h2>
            {
                skills.map(([icon, starNum], index) => (
                    <div key={index} className="skill-wrapper">
                        <span className="skill-icon">
                            {icon}
                        </span>
                        <span className="big">
                            {Array.from({length: starNum}, (_, starIndex) => (
                                <FaStar key={starIndex} className="skill-star"/>
                            ))}
                            {Array.from({length: 5 - starNum}, (_, starIndex) => (
                                <FaRegStar key={starIndex} className="skill-outlined-star"/>
                            ))}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Skills;