import React from 'react';
import { connect } from 'react-redux';
import Cart from './resources/Cart';
import './css/Dashboard.css';
class Dashboard extends React.Component {

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
                            <caption className="dashboard-product__stadistics--details__header">Estadisticas</caption>

                            <tbody>
                                <tr>
                                    <td >Bajo stock</td>
                                    <td className="td">3</td>
                                </tr>
                                <tr>
                                    <td >Categorias</td>
                                    <td className="td">5</td>
                                </tr>
                                <tr>
                                    <td >Productos en categorias</td>
                                    <td className="td">150</td>
                                </tr>
                                <tr>
                                    <td >Productos sin clasificar</td>
                                    <td className="td">30</td>
                                </tr>
                            </tbody>
                        </table>
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

const mapStateToProps = state => { return { products: state.products } }
export default connect(mapStateToProps)(Dashboard);