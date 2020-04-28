import React from 'react';
import { connect } from 'react-redux';
import { Login, showLoginModal } from './resources/Login';
import { logout, getUser } from '../redux/actions/auth.actions';
import './css/Header.scss';

class Header extends React.Component {

    componentDidMount() {
        const { user, token } = this.props.auth;
        if (token && token.access_token && !user) {
            this.props.getUser();
        }
    }

    renderLoginOptions = () => {
        return (
            <React.Fragment>
                <li className="main-nav__item" onClick={showLoginModal}>Login</li>
                <li className="main-nav__item">Register</li>
                <Login />
            </React.Fragment>
        )
    }
    renderUserOptions = () => {

        return (
            <div className="dropdown">
                <li className="main-nav__item">
                    {this.props.auth.user.name}
                </li>
                <div className="dropdown-items">
                    <div className="dropdown-item" id="logout" onClick={this.props.logout}>Cerrar Sesión</div>
                </div>
            </div>
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
            </div>
        );
    }
}

const mapStateToProps = state => { return ({ auth: state.auth }) }
export default connect(mapStateToProps, { logout, getUser })(Header);