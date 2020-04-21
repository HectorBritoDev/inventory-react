import React from 'react';
import { connect } from 'react-redux';
import Cart from './resources/Cart';
class Dashboard extends React.Component {

    render() {
        return (
            <div className="content">
                <div className="dashboard">
                    <div className="dashboard-top">
                        <Cart />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => { return { products: state.products } }
export default connect(mapStateToProps)(Dashboard);