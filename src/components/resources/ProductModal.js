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
            <div className="modal-container" >
                <div className="modal-background" onClick={() => { return console.log('clicked on background') }}></div>
                <div className="modal-body" onClick={() => { return console.log('clicked on body') }}>
                    <div className="modal-title">Product</div>
                    <div className="modal-content">
                        <form>
                            <Field name="name" id="name" type="text" placeholder="Nombre" component={this.renderInput} applyClass="modal-input" autoFocus="true" />
                        </form>
                    </div>
                </div>
            </div>,
            document.querySelector('#product-modal'));
    }
}
const formWrapped = reduxForm({ form: 'product' })(ProductModal);

export default formWrapped;

