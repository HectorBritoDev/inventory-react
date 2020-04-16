import React from 'react';
import ReactDOM from 'react-dom';
import './css/Login.css';

const closeModal = () => {
    console.log('just clicked');
    const login_modal = document.querySelector('.login-modal');
    const backdrop = document.querySelector('.backdrop');
    login_modal.classList.remove('show');
    backdrop.classList.remove('show');
}

const Login = props => {
    return ReactDOM.createPortal(
        <div className="login-container">
            <div className="backdrop" onClick={closeModal}></div>
            <div className="login-modal" >
                <div className="login-modal__body">
                    <div className="login-modal__title">
                        Iniciar Sesión
                </div>
                    <div className="login-modal__content">
                        <form action="" className="login-modal__form">
                            <input className="login-modal__input"
                                type="email"
                                id="login-email"
                                placeholder="Correo electrónico"
                                autoFocus
                                autoComplete="off"
                            />
                            <input className="login-modal__input" type="password" id="password" placeholder="Contraseña" />
                            <button type="submit" className="login-modal__button">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('#login-modal')
    );
}

export default Login;