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
        <MDBNavbar style={{backgroundColor: 'rgba(10,25,47,255)'}} dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">UPEX</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav className="d-flex align-items-center" right>
                    <MDBNavItem active>
                        <MDBNavLink as={Link} to="/home" style={{fontWeight:'700'}} >Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink as={Link} to="/projects" style={{fontWeight:'700'}} >Projects</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink as={Link} to="/blog" style={{fontWeight:'700'}} >Blog</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink as={Link} to="/contactMe" style={{fontWeight:'700'}} >Contact</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink as={Link} to="/about" style={{fontWeight:'700'}}>About</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
}

export default NavbarPage;