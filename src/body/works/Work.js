import "./Work.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAndroid} from '@fortawesome/free-brands-svg-icons'
import detoxRankImagePath from "./detox_rank_logo_svg.svg"
import weddingRingImagePath from "./wedding_ring.svg"

export const detoxRankTitle = "Detox Rank : A mobile application for overcoming dopamine addiction"
export const detoxRankDescription = "This mobile app is designed to teach user about dopamine addiction and provides a fun and engaging way to overcome it. " +
    "Try doing various healthy tasks and engage in a process called dopamine detox to make your life better!";

export const weddingWebsiteDescription = "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet";
export const weddingWebsiteTitle = "Fotosandrik : A wedding photographer's personal website";

function Work() {
    return (
        <div>
            <WorkComponent text={detoxRankDescription}
                           image={
                               <div className="work-component-image">
                                   <img src={detoxRankImagePath} alt="Detox Rank"/>
                               </div>
                           }
                           title={detoxRankTitle}
                           isOnTheLeft={true}
                           button={
                               <a href="https://play.google.com/store/apps/details?id=com.blaubalu.detoxrank"
                                  className="custom-button outlined-button button-fill-effect" id="detox-rank-download">
                                   <FontAwesomeIcon icon={faAndroid}/> Get App <FontAwesomeIcon
                                   icon="fa-solid fa-arrow-right" className="button-icon"/>
                               </a>
                           }/>

            <WorkComponent text={weddingWebsiteDescription}
                           image={
                                <div className="wedding-ring-images">
                                    <img src={weddingRingImagePath} alt="Wedding ring"/>
                                    <img src={weddingRingImagePath} alt="Wedding ring"/>
                                </div>
                           }
                           title={weddingWebsiteTitle}
                           isOnTheLeft={false}
                           button={
                               <a href="https://www.fotosandrik.sk"
                                  className="custom-button outlined-button button-fill-effect">
                                   Visit
                               </a>
                           }
            />
        </div>
    );
}

function WorkComponent({text, image, title, isOnTheLeft, button}) {
    const alignmentClass = (isOnTheLeft) ? "align-left" : "align-right";
    return (
        <div className={`${alignmentClass} work-component`}>
            <h2>{title}</h2>
            <p>{text}</p>
            {image}
            {button}
        </div>
    );
}

export default Work;