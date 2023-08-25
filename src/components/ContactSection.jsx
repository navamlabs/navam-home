import React from "react";
import PhoneIcon from '../assets/Icons/phone.svg';
import MailIcon from '../assets/Icons/mail.svg';

const ContactSection = () => {
    return <>
        <section className="contact-section">
            <div className="contact-section-container">
                <div className="contact-section-header">
                    Any Questions?
                </div>
                <div className="contact-section-header-2">
                    Write or call us
                </div>
                <div className="contact-section-details">
                    <div className="contact-section-details-item">
                        <img width="20px" src={PhoneIcon} alt="My Check" />
                        <span className="contact-section-details-text">
                            +1 (608) 658 0260
                        </span>
                    </div>
                    <div className="contact-section-details-item">
                        <img width="20px" src={MailIcon} alt="My Check" />
                        <span className="contact-section-details-text">
                            accounts@navam.com
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ContactSection;
