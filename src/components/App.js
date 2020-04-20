import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
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
                        <Route path="/products" exact component={Dashboard} />
                        <Route path="/products/create" exact component={Dashboard} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </div>
    );
}
export default App;