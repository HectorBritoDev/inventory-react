import React from 'react';
import './css/Header.css';

const Header = () => {
    return (
        <header className="main-header">
            <div className="main-header__brand">
                <img src="../images/inventory-logo.png" alt="Logo" className="main-header__brand-logo" />
            </div>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item">Login</li>
                    <li className="main-nav__item">Register</li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;