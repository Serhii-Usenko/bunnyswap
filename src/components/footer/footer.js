import React from 'react';
import './footer.css';
import med from '../../picture/icons/med.png';
import dis from '../../picture/icons/dis.jpg';
import twit from '../../picture/icons/twit.png';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer__container">
                <h3 className="footer__title">Join us</h3>
                <div className="footer__link">
                    <a href="https://twitter.com/ICPBunny" target="_blank" rel="noreferrer"><img src={twit} alt="" className="footer__img"/></a>
                    <a href="https://discord.com/channels/887010664558768158/887020899260325888" target="_blank" rel="noreferrer"><img src={dis} alt="" className="footer__img"/></a>
                    <a href="https://medium.com/@icpnbunny" target="_blank" rel="noreferrer"><img src={med} alt="" className="footer__img"/></a>
                </div>
            </div>
            <div className="copy">Copyright © 2021</div>
        </footer>
    )
}

export default Footer;