import React from 'react';
import vector from '../images/VectorLogo.svg';

function Header() {
    return (
        <header className="header">
            <img src={vector} alt="логотип" className="header__logo" />
        </header>
    );
}

export default Header;