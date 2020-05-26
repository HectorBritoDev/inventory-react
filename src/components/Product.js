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
        const productToEdit = {};
    }

    editProduct = (id) => {
        id = id - 1;
        this.productToEdit = this.props.products[id];
        console.log(this.productToEdit);
        showModal('#productModal', '#productModalForm');

    }
    renderTable = () => {
        var { products } = this.props;
        if (products.length === 0) {
            return <div>Cargando...</div>
        }
        const columns = [

            {
                Header: "Nombre",
                accessor: "name",
            },
            {
                Header: "Cantidad",
                accessor: "available",
            },
            {
                Header: "Categoría",
                accessor: "category",
                sortType: "basic",

            },
            {
                id: 'edit',
                accessor: 'id',
                Cell: ({ value }) => (<button onClick={e => { this.editProduct(value) }}>Editar</button>)

            },
            {
                id: 'delete',
                accessor: 'id',
                Cell: ({ value }) => (<button onClick={e => { console.log('eliminar ', value) }}>Eliminar</button>)

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
                <ProductModal initialValues={this.productToEdit} enableReinitialize />
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
const mapStateToProps = state => {
    return {
        products: Object.values(state.products),
    }
};
export default connect(mapStateToProps, { getAllProducts })(Product)
