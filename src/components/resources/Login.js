import React from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { loginAction, getUser } from '../../redux/actions/auth.actions';
// import { closeLoginModal } from '../methods/login';
import '../css/Login.scss';


class Login extends React.Component {

    componentDidUpdate() {
        const { token } = this.props.auth;
        if (token && token.access_token) {
            this.props.reset();
            closeLoginModal();
        }

    }
    renderError = ({ error, touched }) => {
        if (error && touched) {
            return <span className="text-error">{error}</span>
        }
    }

    renderInput = ({ input, type, placeholder, id, meta }) => {
        //{...formProps.input} relaciona todos los  valores, como onChange y value,  automaticamente
        //con el input que estamos renderizando.
        return (
            <React.Fragment>
                <input {...input} className="login-modal__input" id={id} type={type} placeholder={placeholder} autoComplete='off' />
                {this.renderError(meta)}
            </React.Fragment>
        );
    }



    onSubmitForm = formValues => {
        return this.props.loginAction(formValues)
            .then(() => {
                // simulate server latency
                if (this.props.auth.error === 'Bad Request') {
                    throw new SubmissionError({
                        email: 'Usuario o contraseña incorrecto',
                        _error: 'Login failed!'
                    })
                }
            })

    }
    render() {
        return ReactDOM.createPortal(
            <div className="login-container">
                <div className="backdrop" onClick={closeLoginModal}></div>
                <div className="login-modal" >
                    <div className="login-modal__body">
                        <div className="login-modal__title">
                            Iniciar Sesión
                        </div>
                        <div className="login-modal__content">
                            {/* Al usar redux-form al evento onSubit se le pasa el metodo habdleSubmit que 
                            viene con redux-form y a ese metodo le pasamos nuestro metodo local */}
                            <form onSubmit={this.props.handleSubmit(this.onSubmitForm)} className="login-modal__form">
                                <Field name="email" component={this.renderInput} type='text' placeholder='Correo electrónico' id="login-email" />
                                <Field name="password" component={this.renderInput} type='password' placeholder='Contraseña' />
                                <button type="submit" className="login-modal__button">Entrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>,
            document.querySelector('#login-modal')
        );
    }
}

const closeLoginModal = () => {
    // console.log(this.props);
    const login_modal = document.querySelector('.login-modal');
    const backdrop = document.querySelector('.backdrop');
    login_modal.classList.remove('show');
    backdrop.classList.remove('show');
}
const showLoginModal = () => {
    const login_modal = document.querySelector('.login-modal');
    const backdrop = document.querySelector('.backdrop');
    login_modal.classList.add('show-login');
    backdrop.classList.add('show-login');
    document.querySelector('#login-email').focus();
}
const validate = formValues => {
    const errors = {};
    if (!formValues.email) {
        //user dont enter email
        errors.email = 'Debes ingresar un correo';
    }
    if (!formValues.password) {
        //user dont enter email
        errors.password = 'Debes ingresar la contraseña';
    }
    return errors;
}
//esta constante es para compactar toda la sintaxis que genera redux-form
// y pasarlo de forma mas limpia a al metodo connect
const formWrapped = reduxForm({ form: 'login', validate })(Login);

const mapStateToProps = state => { return { auth: state.auth } };

const connectedComponent = connect(mapStateToProps, { loginAction, getUser })(formWrapped);

export { connectedComponent as Login, closeLoginModal, showLoginModal };