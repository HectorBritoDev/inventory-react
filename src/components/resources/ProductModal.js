import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Field, reduxForm } from 'redux-form';

export class ProductModal extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                New Product Modal
            </div>,
            document.querySelector('#product-modal'))
    }
}
const formWrapped = reduxForm({ form: 'product', validate })(Login);

export default formWrapped;

