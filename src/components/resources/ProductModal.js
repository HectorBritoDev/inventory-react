import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Field, reduxForm } from 'redux-form';
import '../css/ProductModal.scss';

export class ProductModal extends Component {
    renderInput = ({ input, id, type, placeholder = '', applyClass = '', autoFocus = "false", meta }) => {
        return (
            <React.Fragment>
                <input {...input} id={id} type={type} placeholder={placeholder} className={applyClass} autoComplete="off" autoFocus={autoFocus != 'false' ? true : false} />
            </React.Fragment>
        );
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal" >
                <div className="modal-background" onClick={() => { return console.log('clicked on background') }}></div>
                <div className="modal-body" onClick={() => { return console.log('clicked on body') }}>
                    <div className="modal-title">Product</div>
                    <div className="modal-content">
                        <form>
                            <Field name="code" id="code" type="text" placeholder="Código" component={this.renderInput} applyClass="modal-input" autoFocus="true" />
                            <Field name="name" id="name" type="text" placeholder="Nombre" component={this.renderInput} applyClass="modal-input" />
                            <Field name="quantity" id="quantity" type="text" placeholder="Cantidad" component={this.renderInput} applyClass="modal-input" />
                            <Field name="unitary_price" id="unitary_price" type="text" placeholder="Precio Unitario" component={this.renderInput} applyClass="modal-input" />
                            <Field name="mayotary_price" id="mayotary_price" type="text" placeholder="Precio Mayoritario" component={this.renderInput} applyClass="modal-input" />
                            <Field name="apply_mayoritary_price_sice" id="apply_mayoritary_price_sice" type="text" placeholder="Aplicar precio mayoritario a partir de" component={this.renderInput} applyClass="modal-input" />
                            <Field name="category" id="category" type="text" placeholder="Category" component={this.renderInput} applyClass="modal-input" />
                            <button type="submit" className="modal-submit-button">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>,
            document.querySelector('#product-modal'));
    }
}
const formWrapped = reduxForm({ form: 'product' })(ProductModal);

export default formWrapped;

