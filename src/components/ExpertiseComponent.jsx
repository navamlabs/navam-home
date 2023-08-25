import React from "react";
import CheckMark from '../assets/Icons/checkmark.svg';

const ExpertiseComponent = ({ index, title, items }) => {
    return <div className={`help-section-container item-${index}`}>
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
                            <div className={`feature-section-item feat-${itemIndex + 1}`}>
                                <div className="item-checkmark">
                                    <img className={`check-mark feat-${itemIndex + 1}`} src={CheckMark} alt="My Check" />
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