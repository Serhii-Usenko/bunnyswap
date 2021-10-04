import React from "react";
import './link.css';

const Link = () => {
    return (
        <div className="find">
            <div className="find__container">
                <h3 className="find__title">
                    You can find us in
                </h3>
                <a href="https://entrepot.app/" target="_blank" rel="noreferrer"><img src="https://entrepot.app/logo.jpg" alt="" className="find-image"/></a>
            </div>
        </div>
    )
}

export default Link;