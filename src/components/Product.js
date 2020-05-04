import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllProducts } from '../redux/actions/products.action';
import ProductModal from './resources/ProductModal';
import './css/Product.scss';
export class Product extends Component {
    componentDidMount() {
        this.props.getAllProducts();
    }
    renderTable = () => {
        var { products } = this.props;
        if (products.length === 0) {
            return <div>Cargando...</div>
        }
        return (
            <table className="table">
                <thead className="table__thead">
                    <tr>
                        <th>Nombre</th>
                        <th>En almacén</th>
                        <th>Precio unitario</th>
                        <th>Precio mayoritario</th>
                    </tr>
                </thead>
                <tbody className="table__tbody">
                    <tr>
                        <td>Producto 1</td>
                        <td>500</td>
                        <td>5.000</td>
                        <td>4.000</td>
                    </tr>
                </tbody>
            </table>
        );
    }
    render() {
        return (
            <div className="product">
                {this.renderTable()}
                <ProductModal />
            </div>

        )
    }
}
const mapStateToProps = state => { return { products: Object.values(state.products) } };
export default connect(mapStateToProps, { getAllProducts })(Product)
