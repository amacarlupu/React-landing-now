import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Container, Navbar,
    Nav, Button
} from 'react-bootstrap';
import logo from '../../img/logofinal.png';


export const NavbarScreen = () => {

    return (
        <Navbar bg="light" expand="lg" className="navbar__container">
            <Container fluid>
                    <Link to="/" className="navbar__logo_container" >
                        <img
                            src={logo}
                            className="navbar__logo"
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar__collapse">
                        <Nav className="ms-auto navbar__item_container" >
                            <NavLink
                                className="nav-item nav-link navbar__item" 
                                to="/nosotros"
                            >
                                Nosotros
                            </NavLink>

                            <NavLink
                                className="nav-item nav-link navbar__item" 
                                to="/soporte"
                            >
                                Soporte
                            </NavLink>
                            <NavLink
                                className="nav-item nav-link navbar__item" 
                                to="/soporte"
                            >
                                <Button variant="danger">
                                    Solicitar Prueba
                                </Button>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}