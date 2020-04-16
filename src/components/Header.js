import React from 'react';
import './css/Header.css';
import Login from './Login';

const showLoginModal = () => {
    const login_modal = document.querySelector('.login-modal');
    const backdrop = document.querySelector('.backdrop');
    login_modal.classList.add('show');
    backdrop.classList.add('show');
    document.querySelector('#login-email').focus();
}

const Header = () => {
    return (
        <div>
            <header className="main-header">
                <div className="main-header__brand">
                    <img src="../images/inventory-logo.png" alt="Logo" className="main-header__brand-logo" />
                </div>
                <nav className="main-nav">
                    <ul className="main-nav__items">
                        <li className="main-nav__item" onClick={showLoginModal}>Login</li>
                        <li className="main-nav__item">Register</li>
                    </ul>
                </nav>
            </header >
            <Login />
        </div>

    )
}


export default Header;