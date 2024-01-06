import './Hero.css';
import Welcome from "./welcome/Welcome";
import HeroButtons from "./buttons/HeroButtons";

function Hero() {
    return (
        <div className="hero-outer-wrapper">
            <div className="hero-wrapper">
                <Welcome/>
                <HeroButtons/>
            </div>
        </div>
    );
}

export default Hero;