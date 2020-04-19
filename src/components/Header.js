import React from 'react';
import { connect } from 'react-redux';
import './css/Header.css';
import Login from './Login';


class Header extends React.Component {

    showLoginModal = () => {
        const login_modal = document.querySelector('.login-modal');
        const backdrop = document.querySelector('.backdrop');
        login_modal.classList.add('show');
        backdrop.classList.add('show');
        document.querySelector('#login-email').focus();
    }
    renderLoginOptions = () => {
        return (
            <React.Fragment>
                <li className="main-nav__item" onClick={this.showLoginModal}>Login</li>
                <li className="main-nav__item">Register</li>
            </React.Fragment>
        )
    }
    renderUserOptions = () => {
        return (
            <React.Fragment>
                <li className="main-nav__item">{this.props.auth.user.name}</li>
            </React.Fragment>
        )
    }
    renderMenuItems = () => {
        if (this.props.auth.user) {
            return this.renderUserOptions();
        } else {
            return this.renderLoginOptions();
        }
    }

    render() {
        return (
            <div>
                <header className="main-header">
                    <div className="main-header__brand">
                        <img src="../images/inventory-logo.png" alt="Logo" className="main-header__brand-logo" />
                    </div>
                    <nav className="main-nav">
                        <ul className="main-nav__items">
                            {this.renderMenuItems()}
                        </ul>
                    </nav>
                </header >
                <Login />
            </div>
        );
    }
}

const mapStateToProps = state => { return ({ auth: state.auth }) }
export default connect(mapStateToProps)(Header);