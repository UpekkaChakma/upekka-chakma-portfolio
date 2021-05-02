import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import personalPhoto from '../../Images/personal photo(1).png';
import NavbarPage from '../Navbar/NavbarPage';
import Particles from 'react-particles-js';
import ConfigParticles from '../Config/ConfigParticles';

const Home = () => {

    return (
        <div style={{ position: 'relative', overflow: "hidden" }}>
            <div style={{ position: 'absolute' }}>
                <Particles height="100vh" width="100vw" params={ConfigParticles} />
            </div>
            <NavbarPage></NavbarPage>
            <MDBContainer fluid className="background">
                <MDBRow>
                    <MDBCol md="6" sm="12" >
                        <MDBRow>
                            <MDBCol lg="12" className=" d-flex justify-content-center align-items-center">
                                <img style={{ width: '22rem' }} src={personalPhoto} alt="" />
                            </MDBCol>
                            <MDBCol lg="12" className=" d-flex justify-content-center align-items-center">
                                <a rel="noreferrer" href="https://drive.google.com/uc?export=download&id=15aNGJamac-mXchy7A5T-uCT_7I1z7E03" ><MDBBtn style={{ borderRadius: '5px', fontSize: '13px', fontWeight: '700' }} color="default" size="sm">download resume</MDBBtn></a>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="6" sm="0" className="text-center">
                        <h1 style={{ fontWeight: '700' }} className="text-white">Hello!</h1>
                        <h1 className="text-white" style={{ fontWeight: '700' }}>I am Upekka Chakma</h1>
                        <ul style={{ fontWeight: '700' }} className="none">
                            <li>Web Developer</li>
                            <li>Programmer</li>
                            <li>MERN stack Developer</li>
                        </ul>
                        <p style={{ fontWeight: '400' }} className="text-white">I am a junior web developer, currently dedicated myself to become even better in the web development field</p>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>

        </div>
    );
};

export default Home;