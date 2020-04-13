import React from 'react';
import './css/Login.css';

const Login = () => {
    return (
        <div className="login-modal">
            <div className="login-modal__title">
                <h3>Iniciar Sesión</h3>
            </div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" />
        </div>
    );
}

export default Login;