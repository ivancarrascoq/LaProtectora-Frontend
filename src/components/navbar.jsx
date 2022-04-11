import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    state = { 
        showReportsOptions: 0,
        showRendicionesAyCOptions: 1,
        showSuppliersOptions: 0
    };

    handleShowOptions = option => {
    };

    render() { 
        return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard" onClick={()=> this.handleShowOptions(1)}>
                    <span data-feather="home"></span>
                    Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/rendicion/new" onClick={()=> this.handleShowOptions(1)}>
                    <span data-feather="plus"></span>
                    Crear Rendici&oacute;n
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/proveedores" onClick={()=> this.handleShowOptions(2)}>
                        <span data-feather="file"></span>
                        Proveedores
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/super_reportes" onClick={()=> this.handleShowOptions(3)}>
                        <span data-feather="shopping-cart"></span>
                        Generar Reportes Superintendencia
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/users" onClick={()=> this.handleShowOptions(4)}>
                        <span data-feather="users"></span>
                        Usuarios
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                    <span data-feather="layers"></span>
                    Categorias
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                    <span data-feather="contabilidad"></span>
                    Contabilidad
                    </NavLink>
                </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <NavLink className="link-secondary" to="/" aria-label="Add a new report">
                    <span data-feather="plus-circle"></span>
                </NavLink>
                </h6>
                <ul className="nav flex-column mb-2">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                    <span data-feather="file-text"></span>
                    Current month
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                    <span data-feather="file-text"></span>
                    Last quarter
                    </NavLink>
                </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default NavBar;