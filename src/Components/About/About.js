import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import NavbarPage from '../Navbar/NavbarPage';
import './About.css';

const About = () => {
    return (
        <div style={{ backgroundColor: 'rgba(10,25,47,255)', paddingBottom: '50px' }}>
            <NavbarPage></NavbarPage>
            <section id="home" class="parallax-section">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" sm="6"><div className="home-img"></div></MDBCol>
                        <MDBCol md="6" sm="6"></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <section>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" sm="12"></MDBCol>
                        <MDBCol md="3" sm="6"><div className="home-img"></div></MDBCol>
                        <MDBCol md="3" sm="6"></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <section>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="3" sm="6"></MDBCol>
                        <MDBCol md="3" sm="6"></MDBCol>
                        <MDBCol md="3" sm="6"></MDBCol>
                        <MDBCol md="3" sm="6"></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
    );
};

export default About;