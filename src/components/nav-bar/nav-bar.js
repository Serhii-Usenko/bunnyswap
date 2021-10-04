import React, { useState } from 'react';
import './nav-bar.css';

const NavBar = () => {

     const [showLinks, setShowLinks] = useState(false);

     const handleShowLinks = () => {
         setShowLinks(!showLinks)
     }

    return (
        <header className="header">
            <div className="header__container">
                <div className="logo">
                    <img src="https://i.ibb.co/zJXZxJm/F1s-GYl-22.jpg" alt="logo" className="logo__pict" />
                </div>
                <div className={showLinks ? "navbar" : "show-nav"}>
                    <div className="navbar__container navbar__container-mob">
                        <ul className="navbar__list navbar__list-mobile">
                            <li className="navbar__list-item mob-list"><a href="#about" className="nav-link nav_link-mob">About</a></li>
                            <li className="navbar__list-item mob-list"><a href="#product" className="nav-link">Products</a></li>
                            <li className="navbar__list-item mob-list"><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mob-burger">
                    <button className={showLinks ? "close-nav" : "nav-burger"} onClick={handleShowLinks}>
                        <span className=""></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default NavBar;