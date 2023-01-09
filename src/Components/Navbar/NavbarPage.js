import React, { useState } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink,
    MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { Link } from 'react-router-dom';

const NavbarPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }
    return (
        <MDBNavbar className="fixed-top px-5 background" dark expand="md" id="navbar">
            <MDBNavbarBrand>
                <strong className="white-text font-400">Upekka</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav className="d-flex align-items-center" right>
                    <MDBNavItem active>
                        <MDBNavLink as={Link} to="/home" className="ml-5 px-3 px-1 rounded">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink as={Link} to="/projects" className="ml-5 px-3 px-1 rounded">Projects</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink as={Link} to="/blog" className="ml-5 px-3 px-1 rounded">Blog</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink as={Link} to="/contactMe" className="ml-5 px-3 px-1 rounded">Contact</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink as={Link} to="/about" className="ml-5 px-3 px-1 rounded">About</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
}

export default NavbarPage;