import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Field, reduxForm } from 'redux-form';
import '../css/ProductModal.scss';

export class ProductModal extends Component {
    render() {
        return ReactDOM.createPortal(
            <div className="modal-container">
                <div className="modal-background" onClick={() => { return console.log('clicked on background') }}></div>
                <div className="modal-body" onClick={() => { return console.log('clicked on body') }}>
                    <div className="modal-title">Product</div>
                    <div className="modal-content">Description</div>
                </div>
            </div>,
            document.querySelector('#product-modal'));
    }
}
const formWrapped = reduxForm({ form: 'product' })(ProductModal);

export default formWrapped;

