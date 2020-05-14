import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/Sidebar.scss';
class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar__container ul">
                    <li className=" ">
                        <h2 className="sidebar__header">Ventas</h2>
                        <ul className="ul sidebar__items">
                            <Link to="/sales/create" className="sidebar__item--link">
                                <li className="sidebar__item li">
                                    Nueva
                                </li>
                            </Link>
                            <Link to="/sales" className="sidebar__item--link">
                                <li className="sidebar__item li">
                                    Listado
                                </li>
                            </Link>
                        </ul>
                    </li>
                    <li className=" ">
                        <h2 className="sidebar__header">Compras</h2>
                        <ul className="ul sidebar__items">
                            <Link to="/purchases/create" className="sidebar__item--link">
                                <li className="sidebar__item li">
                                    Nueva
                                </li>
                            </Link>
                            <Link to="/purchases" className="sidebar__item--link">
                                <li className="sidebar__item li">
                                    Listado
                                </li>
                            </Link>
                        </ul>
                    </li>
                    <li className=" ">
                        <h2 className="sidebar__header">Productos</h2>
                        <ul className="ul sidebar__items">
                            {/* <Link to="/products/create" className="sidebar__item--link"> */}
                            {/* <a href="#" onClick={this.openModal}> */}

                            <li className="sidebar__item li" >
                                Nuevo
                            {/* <ProductModal /> */}
                            </li>
                            {/* </a> */}
                            {/* </Link> */}
                            <Link to="/products" className="sidebar__item--link">
                                <li className="sidebar__item li">
                                    Listado
                                </li>
                            </Link>
                        </ul>
                    </li>
                    <li className=" ">
                        <h2 className="sidebar__header">Categorias</h2>
                        <ul className="ul sidebar__items">
                            <Link to="/categories/create" className="sidebar__item--link">
                                <li className="sidebar__item li">
                                    Nueva
                                </li>
                            </Link>
                            <Link to="/categories" className="sidebar__item--link">
                                <li className="sidebar__item li">
                                    Listado
                                </li>
                            </Link>
                        </ul>
                    </li>
                </ul>
            </div >
        );
    }
}
const mapStateToProps = state => { return { auth: state.auth } };
export default connect(mapStateToProps)(Sidebar);