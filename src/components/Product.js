import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllProducts } from '../redux/actions/products.action';
import ProductModal from './resources/ProductModal';
import Table from './resources/Table';
import { showModal } from './helpers/methods';
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
        const columns = [

            {
                Header: "Id",
                accessor: "id",
                sortType: "basic"
            },
            {
                Header: "Nombre",
                accessor: "name",
                sortType: "basic"
            },
            {
                Header: "Cantidad",
                accessor: "available",
                sortType: "basic"
            }

        ];

        return (
            <div className="product-list" >
                {/* <div className="product-list__options">
                    <button className="product-list__button" onClick={showModal}>Agregar producto</button>
                </div> */}

                <Table columns={columns} data={products} title="Productos" />
            </div>
        );
    }
    renderCreateProductButton = () => {
        return (
            <>
                <button className="new_product-button" onClick={() => showModal('#productModal', '#productModalForm')}>Agregar Producto +</button>
                <ProductModal />
            </>
        );
    }
    render() {
        return (
            <div className="product">
                {this.renderTable()}
                {this.renderCreateProductButton()}
            </div>

        )
    }
}
const mapStateToProps = state => { return { products: Object.values(state.products) } };
export default connect(mapStateToProps, { getAllProducts })(Product)
