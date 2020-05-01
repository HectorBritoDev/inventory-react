import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../redux/actions/products.action';
import { groupBy, orderBy, mathSimpleOperation } from './helpers/methods';
import Cart from './resources/Cart';
import './css/Dashboard.scss';
class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getAllProducts();
    }
    calculateTotalUnitsSold = () => {
        return [...this.props.products].reduce(mathSimpleOperation('add', 'total_units_sold', 'stadistics'), 0);
    }

    calculateAvailableStock = () => {
        return [...this.props.products].reduce(mathSimpleOperation('add', 'available'), 0)
    }
    calculateLowStock = () => {
        const lowStock = this.props.products.filter((product) => {
            return product.available < 100;
        });
        return lowStock.length;
    }
    calculateTotalCategories = () => {
        //groupBy method returns an object with all categories and the value
        //Object.keys gets only the keys
        let categories = Object.keys(groupBy(this.props.products, 'category_url'));
        //remove the 'undefined' index comming from products without categories
        if (categories.indexOf('undefined') === 1) {
            categories.splice(categories.indexOf('undefined'), 1);
        }
        return categories.length;
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
    calculateTopSellingProducts() {
        const topProducts = [...this.props.products].sort(orderBy('total_units_sold', 'stadistics', 'desc'))
            .slice(0, 5)
            .map(function (product) {
                return (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.stadistics.total_units_sold}</td>
                    </tr>
                )
            });
        return topProducts;
    }
    calculateLastPurchasedProducts() {
        const lastPurchases = [...this.props.products].sort(orderBy('last_time_purchased', 'stadistics', 'asc'))
            .slice(0, 5)
            .reverse()
            .map(function (product) {
                return (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.stadistics.last_time_purchased}</td>
                    </tr>
                );
            });
        return lastPurchases;
    }

    renderActivitySection = () => {
        return (
            <div className="dashboard-activity">
                <div className="dashboard-header">Actividad</div>
                <div className="dashboard-activity__items">
                    <Cart quantity={this.calculateTotalUnitsSold()} measure="productos" description="vendidos" />
                    <Cart quantity={this.calculateAvailableStock()} measure="productos" description="en stock" />
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
                                    {this.calculateTopSellingProducts()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="dashboard-product__stadistics">

                        <div className="dashboard-product__stadistics--details">
                            <table className="dashboard-product__stadistics--details__table">
                                <caption className="dashboard-product__stadistics--details__header text-left">Últimos agregados</caption>
                                <tbody>{this.calculateLastPurchasedProducts()}</tbody>
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