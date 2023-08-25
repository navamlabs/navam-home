import React from "react";

function getImgUrl(name) {
    return new URL(`../assets/Icons/tech/${name}.svg`, import.meta.url).href
}

const techIcons = [
    'java', 'spring', 'react', 'js', 'mongo', 'spark', 'aws', 'pytorch', 'html5', 'angularjs', 'kubernetes', 'docker', 'scala', 'gcp'
];

const TechSection = () => {
    return <>
        <section className="tech-section">
            <div className="tech-section-container">
                {techIcons.map((tech, index) => <div key={index} className="tech-item">
                    <img className="tech-icon tech-1" src={getImgUrl(tech)} />
                </div>)}
            </div>
        </section>
    </>
}

export default TechSection;
