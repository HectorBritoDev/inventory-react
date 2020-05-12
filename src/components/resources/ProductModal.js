import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Field, reduxForm } from 'redux-form';
import { closeModal } from '../helpers/methods';
import '../css/ProductModal.scss';

export class ProductModal extends Component {
    renderError = ({ error, touched }) => {
        if (error && touched) {
            return <span className="text-error">{error}</span>
        }
    }
    renderInput = ({ input, id, type, placeholder = '', applyClass = '', autoFocus = "false", meta }) => {
        return (
            <React.Fragment>
                <input {...input}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={`${applyClass}  ${(meta.error && meta.touched) ? 'input-error' : ''}`}
                    autoComplete="off"
                    autoFocus={autoFocus !== 'false' ? true : false} />
                {this.renderError(meta)}
            </React.Fragment>
        );
    }

    onSubmitForm = formValues => {
        console.log('success');
    };

    resetAndCloseModal = () => {
        this.props.reset();
        closeModal();
    };

    render() {
        return (
            <ModalTemplate target='#product-modal' closeModal={this.resetAndCloseModal} title="Producto">
                <form onSubmit={this.props.handleSubmit(this.onSubmitForm)}>
                    <Field name="code" id="code" type="text" placeholder="Código (opcional)" component={this.renderInput} applyClass="modal-input" />
                    <Field name="name" id="name" type="text" placeholder="Nombre" component={this.renderInput} applyClass="modal-input" />
                    <Field name="quantity" id="quantity" type="text" placeholder="Cantidad" component={this.renderInput} applyClass="modal-input" />
                    <Field name="unitary_price" id="unitary_price" type="text" placeholder="Precio Unitario" component={this.renderInput} applyClass="modal-input" />
                            <Field name="mayotary_price" id="mayotary_price" type="text" placeholder="Precio Mayoritario" component={this.renderInput} applyClass="modal-input" />
                            <Field name="apply_mayoritary_price_sice" id="apply_mayoritary_price_sice" type="text" placeholder="Aplicar precio mayoritario a partir de" component={this.renderInput} applyClass="modal-input" />
                            <Field name="category" id="category" type="text" placeholder="Categoria" component={this.renderInput} applyClass="modal-input" />
                            <button type="submit" className="modal-submit-button">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>,
            document.querySelector('#product-modal'));
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'Debes ingresar un nombre';
    }
    if (isNaN(formValues.quantity)) {
        errors.quantity = 'Ingresa un numero';
    }
    if (!formValues.quantity) {
        errors.quantity = 'Debes ingresar una cantidad';
    }

    if (isNaN(formValues.unitary_price)) {
        errors.unitary_price = "Ingresa un número"
    }
    if (!formValues.unitary_price) {
        errors.unitary_price = 'Ingresa un precio';
    }

    if (parseInt(formValues.unitary_price) < 0) {
        errors.unitary_price = "La cantidad tiene que ser superior a 0";
    }

    return errors;

};
const formWrapped = reduxForm({ form: 'product', validate })(ProductModal);

export default formWrapped;

