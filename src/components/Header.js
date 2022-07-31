import React from 'react';
import Vector from '../images/VectorLogo.svg';

function Header() {
    return (
        <header className="header">
            <img src={Vector} alt="логотип" className="header__logo" />
        </header>
    );
}

export default Header;