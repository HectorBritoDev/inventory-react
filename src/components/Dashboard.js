import React from 'react';
import { connect } from 'react-redux';
import Cart from './resources/Cart';
import './css/Dashboard.css';
class Dashboard extends React.Component {

    renderTopSection = () => {
        return (
            <div className="dashboard-top">
                <div className="dashboard-top__header">Actividad</div>
                <div className="dashboard-top__items">
                    <Cart quantity="500" measure="unidades" description="vendidas" />
                    <Cart quantity="500" measure="unidades" description=" vendidas" />
                    <Cart quantity="500" measure="unidades" description=" vendidas" />
                    <Cart quantity="500" measure="unidades" description=" vendidas" />
                </div>
            </div>
        );

    }
    render() {
        return (
            <div className="content">
                <div className="dashboard">
                    {this.renderTopSection()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => { return { products: state.products } }
export default connect(mapStateToProps)(Dashboard);