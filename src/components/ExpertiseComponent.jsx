import React, { useEffect, useRef } from "react";
import CheckMark from '../assets/Icons/checkmark.svg';

const ExpertiseComponent = ({ index, title, items }) => {
    const techCardRef = useRef(null);
    const checkmarkRef = useRef([]);
    const featureSectionItemRef = useRef([]);

    useEffect(() => {
        const callback = (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting && entry.target.classList.contains('item-1') && !entry.target.classList.contains('start-reveal-left')) {
                    entry.target.classList.add('start-reveal-left')
                }
                if (entry.isIntersecting && entry.target.classList.contains('item-2') && !entry.target.classList.contains('start-reveal-right')) {
                    entry.target.classList.add('start-reveal-right')
                }
                if (entry.isIntersecting && entry.target.classList.contains('item-3') && !entry.target.classList.contains('start-reveal-left')) {
                    entry.target.classList.add('start-reveal-left')
                }
                if (entry.isIntersecting && entry.target.classList.contains('item-4') && !entry.target.classList.contains('start-reveal-right')) {
                    entry.target.classList.add('start-reveal-right')
                }
            });
        }

        let callbackInnerCards = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.classList.contains('start-reveal')) {
                    entry.target.classList.add('start-reveal')
                }
            });
        }

        const observer = new IntersectionObserver(callback, {});
        observer.observe(techCardRef.current);

        const checkmarkobserver = new IntersectionObserver(callbackInnerCards, {});
        checkmarkRef && checkmarkRef.current && checkmarkRef.current.forEach(ref => checkmarkobserver.observe(ref));


        const featureSectionItemsObserver = new IntersectionObserver(callbackInnerCards, {});
        featureSectionItemRef && featureSectionItemRef.current && featureSectionItemRef.current.forEach(ref => featureSectionItemsObserver.observe(ref));
        return () => {
            observer.unobserve(techCardRef.current);
            checkmarkRef && checkmarkRef.current && checkmarkRef.current.forEach(ref => checkmarkobserver.unobserve(ref));
            featureSectionItemRef && featureSectionItemRef.current && featureSectionItemRef.current.forEach(ref => featureSectionItemsObserver.unobserve(ref));
        }


    })
    return <div ref={techCardRef} className={`help-section-container item-${index}`}>
        <div className="background-rect-1"></div>
        <div className="background-rect-2"></div>
        <div className="help-section-canvas-container">
            <div className="help-section-text-container">
                <div className="feature-section-title">
                    <span>{title}</span>
                </div>
                <div className="feature-section-items-container">
                    <div className={`feature-section-items item-${index}`}>
                        {items && items.map((item, itemIndex) => <div key={itemIndex}>
                            <div ref={el => featureSectionItemRef.current[itemIndex] = el} className={`feature-section-item feat-${itemIndex + 1}`}>
                                <div className="item-checkmark">
                                    <img ref={el => checkmarkRef.current[itemIndex] = el} className={`check-mark feat-${itemIndex + 1}`} src={CheckMark} alt="My Check" />
                                </div>
                                <div className="item-title">
                                    {item}
                                </div>
                            </div>
                            {itemIndex == (items.length - 1) ? <div className="feature-section-item-divider-last">
                            </div> : <div className="feature-section-item-divider">
                                <hr />
                            </div>}
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ExpertiseComponent;