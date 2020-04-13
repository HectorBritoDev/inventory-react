import React from 'react';

const Login = () => {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" />
        </div>
    );
}

export default Login;