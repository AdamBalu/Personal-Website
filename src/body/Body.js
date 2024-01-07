import Hero from "./hero/Hero";
import Work from "./works/Work";
import Skills from "./skills/Skills";
import Socials from "./socials/Socials";

function Body() {
    return (
        <body>
        <div className="vertical-center-line"></div>
        <Hero/>
        <Work/>
        <Skills/>
        <Socials/>
        </body>
    );
}

export default Body;