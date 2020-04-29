import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../redux/actions/products.action';
import { groupBy } from './helpers/methods';
import Cart from './resources/Cart';
import './css/Dashboard.scss';
class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getAllProducts();
    }
    calculateLowStock = () => {
        const lowStock = this.props.products.filter((product) => {
            return product.avaliable < 100;
        });
        return lowStock.length;
    }
    calculateProductsWithinCategories = () => {
        return this.props.products.filter((product) => {
            return product.category_url != null;
        }).length;
    }
    calculateProductsWithoutCategories = () => {
        // return Object.keys(this.props.products).include('category_url').length;

        return this.props.products.filter((product) => {
            return !Object.keys(product).includes('category_url');
        }).length;
    }
    calculateTotalCategories = () => {
        //groupBy method returns an object with all categories and the value
        //Object.keys gets only the keys
        let categories = Object.keys(groupBy(this.props.products, 'category_url'));
        //remove the 'undefined' index comming from products without categories
        categories.splice(categories.indexOf('undefined'), 1);
        return categories.length;
    }
    renderActivitySection = () => {
        return (
            <div className="dashboard-activity">
                <div className="dashboard-header">Actividad</div>
                <div className="dashboard-activity__items">
                    <Cart quantity="500" measure="unidades" description="vendidas" />
                    <Cart quantity="500" measure="unidades" description=" vendidas" />
                    <Cart quantity="500" measure="unidades" description=" vendidas" />
                    <Cart quantity="500" measure="unidades" description=" vendidas" />
                </div>
            </div>
        );
    }
    renderProductSection = () => {
        return (
            <div className="dashboard-product">
                <div className="dashboard-header">Productos</div>
                <div className="dashboard-product__stadistics">
                    <div className="dashboard-product__stadistics--details">
                        <table className="dashboard-product__stadistics--details__table">
                            <caption className="dashboard-product__stadistics--details__header text-left">Estadísticas</caption>
                            <tbody>
                                <tr>
                                    <td className="primary">Bajo stock</td>
                                    <td className="text-right primary strong">{this.calculateLowStock()}</td>
                                </tr>
                                <tr>
                                    <td >Categorias</td>
                                    <td className="text-right strong">{this.calculateTotalCategories()}</td>
                                </tr>
                                <tr>
                                    <td >Productos en categorias</td>
                                    <td className="text-right strong">{this.calculateProductsWithinCategories()}</td>
                                </tr>
                                <tr>
                                    <td className="primary">Productos sin clasificar</td>
                                    <td className="text-right primary strong">{this.calculateProductsWithoutCategories()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="dashboard-product__stadistics">
                        <div className="dashboard-product__stadistics--details">
                            <table className="dashboard-product__stadistics--details__table">
                                <caption className="dashboard-product__stadistics--details__header text-left">Lo mas vendido</caption>
                                <tbody>
                                    <tr>
                                        <td className="primary">Producto 1</td>
                                        <td className="strong text-right primary">1500</td>
                                    </tr>
                                    <tr>
                                        <td className="">Producto 2</td>
                                        <td className="text-right strong">1200</td>
                                    </tr>
                                    <tr>
                                        <td className="">Producto 3</td>
                                        <td className="text-right strong">900</td>
                                    </tr>
                                    <tr>
                                        <td className="">Producto 4</td>
                                        <td className="text-right strong">500</td>
                                    </tr>
                                    <tr>
                                        <td className="">Producto 5</td>
                                        <td className="text-right strong">200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="dashboard-product__stadistics">

                        <div className="dashboard-product__stadistics--details">
                            <table className="dashboard-product__stadistics--details__table">
                                <caption className="dashboard-product__stadistics--details__header text-left">Últimos agregados</caption>
                                <tbody>
                                    <tr>
                                        <td className="primary">Producto E</td>
                                        <td className="strong text-right primary">31/01/2020</td>
                                    </tr>
                                    <tr>
                                        <td className="">Producto D</td>
                                        <td className="text-right strong">30/01/2020</td>
                                    </tr>
                                    <tr>
                                        <td className="">Producto C</td>
                                        <td className="text-right strong">25/01/2020</td>
                                    </tr>
                                    <tr>
                                        <td className="">Producto B</td>
                                        <td className="text-right strong">20/01/2020</td>
                                    </tr>
                                    <tr>
                                        <td className="">Producto A</td>
                                        <td className="text-right strong">15/01/2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="content">
                <div className="dashboard">
                    {this.renderActivitySection()}
                    {this.renderProductSection()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => { return { products: Object.values(state.products) } }
export default connect(mapStateToProps, { getAllProducts })(Dashboard);