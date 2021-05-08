import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = ({year}) => {
    return (
        <div className="footer">
            <div className="container">
                <div className='mail'>
                    <a href="https://mail.google.com/mail/u/0/">
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                    </a>
                    <p>info@businessoft.bg</p>
                </div>
                <p> © {year} BusinesSoft Ltd. All rights reserved. </p>
                <div className="social">
                    <a href="https://www.facebook.com/BusinesSoftSystems">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.linkedin.com/company/businessoft/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/BusinesSoftSys">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Footer;