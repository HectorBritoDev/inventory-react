import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { closeModal } from '../helpers/methods';
import { storeProduct, updateProduct } from '../../redux/actions/products.actions';
import { getAllCategories } from '../../redux/actions/categories.actions';
import ModalTemplate from './ModalTemplate';
import '../css/ProductModal.scss';

export class ProductModal extends Component {
    componentDidMount() {
        this.props.getAllCategories();
    }
    renderError = ({ error, touched }) => {
        if (error && touched) {
            return <span className="text-error">{error}</span>
        }
    }
    renderInput = ({ input, id, type, placeholder = '', applyClass = '', meta }) => {
        return (
            <React.Fragment>
                <input {...input}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={`${applyClass}  ${(meta.error && meta.touched) ? 'input-error' : ''}`}
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </React.Fragment>
        );
    }
    renderCategorySelector = ({ input, meta }) => {
        return (
            <React.Fragment>
                <select {...input} id="category_product_selector">
                    <option value="">Categoria</option>
                    {this.props.categories.map(function (category) {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )
                    })}
                </select>
            </React.Fragment>
        );
    }

    onSubmitForm = formValues => {
        (this.props.initialValues)
            ? this.props.updateProduct(formValues)
            : this.props.storeProduct(formValues);
        // this.props.storeProduct(formValues);
        // console.log(formValues);
    };

    resetAndCloseModal = () => {
        this.props.reset();
        closeModal('#productModal');
    };

    render() {
        return (
            <ModalTemplate target='#product-modal' closeModal={this.resetAndCloseModal} title="Producto" id="productModal">
                <form onSubmit={this.props.handleSubmit(this.onSubmitForm)} id="productModalForm">
                    <Field name="code" id="code" type="text" placeholder="Código (opcional)" component={this.renderInput} applyClass="modal-input" />
                    <Field name="name" id="name" type="text" placeholder="Nombre" component={this.renderInput} applyClass="modal-input" />
                    <Field name="available" id="available" type="text" placeholder="Cantidad" component={this.renderInput} applyClass="modal-input" />
                    <Field name="unitary_price" id="unitary_price" type="text" placeholder="Precio Unitario" component={this.renderInput} applyClass="modal-input" />
                    <Field name="mayoritary_price" id="mayoritary_price" type="text" placeholder="Precio Mayoritario" component={this.renderInput} applyClass="modal-input" />
                    <Field name="apply_mayoritary_price_since" id="apply_mayoritary_price_since" type="text" placeholder="Aplicar precio mayoritario a partir de" component={this.renderInput} applyClass="modal-input" />
                    <Field name="category" id="category" type="text" placeholder="Categoria" component={this.renderCategorySelector} applyClass="modal-input" />
                    <button type="submit" className="modal-submit-button">Agregar</button>
                </form>
            </ModalTemplate>
        )
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

    if (parseInt(formValues.unitary_price) <= 0) {
        errors.unitary_price = "La cantidad tiene que ser superior a 0";
    }

    return errors;

};
const formWrapped = reduxForm({ form: 'product', validate })(ProductModal);
const mapStateToProps = state => { return { categories: Object.values(state.categories) } };
export default connect(mapStateToProps, { storeProduct, updateProduct, getAllCategories })(formWrapped);

