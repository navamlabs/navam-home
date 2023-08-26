import React from "react";
import Marquee from "react-marquee-slider";

function getImgUrl(name) {
    return new URL(`../assets/Icons/tech/${name}.svg`, import.meta.url).href
}

const techIcons = [
    'java', 'spring', 'react', 'js', 'mongo', 'spark', 'aws', 'pytorch', 'html5', 'angularjs', 'kubernetes', 'docker', 'scala', 'gcp'
];

const TechSection = () => {
    return <>
        <div className="tech-section-container">
            <Marquee velocity={10}>
                {techIcons.map((tech, index) => <div key={index} >
                    <img className="tech-icon" src={getImgUrl(tech)} />
                </div>)}
            </Marquee>
        </div>
    </>
}

export default TechSection;
