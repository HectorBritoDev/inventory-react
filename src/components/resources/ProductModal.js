import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

export class ProductModal extends Component {
    render() {
        return (
            <div>
                New Product Modal
            </div>
        )
    }
}
const formWrapped = reduxForm({ form: 'product', validate })(Login);

export default formWrapped;

