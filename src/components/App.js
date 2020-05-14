import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import './css/App.scss';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Product from './Product';
import ProductModal from './resources/ProductModal';
import Sidebar from './Sidebar';
// import Sidebar from './Sidebar';


const App = () => {
    return (
        <div className="container">
            <Router history={history}>
                <Header />
                <main>
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/sales" exact component={Dashboard} />
                        <Route path="/sales/create" exact component={Dashboard} />
                        <Route path="/purchases" exact component={Dashboard} />
                        <Route path="/purchases/create" exact component={Dashboard} />
                        <Route path="/categories" exact component={Dashboard} />
                        <Route path="/categories/create" exact component={Dashboard} />
                        <Route path="/products" exact component={Product} />
                        {/* <Route path="/products/create" exact component={ProductModal} /> */}
                    </Switch>
                </main>
                <Footer />
            </Router>
        </div>
    );
}
export default App;