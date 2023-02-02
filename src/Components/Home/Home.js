import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import personalPhoto from '../../Images/personal-photo.png';
import NavbarPage from '../Navbar/NavbarPage';
import Typewriter from 'typewriter-effect';

const Home = () => {

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center background position-relative">
            <NavbarPage />
            <MDBContainer fluid className="">
                <MDBRow>
                    <MDBCol md="6" sm="12" >
                        <MDBRow>
                            <MDBCol lg="12" className="d-flex justify-content-center align-items-center animate__animated animate__fadeInDown animate__delay-1s">
                                <img style={{ minWidth: '18rem', maxWidth: '50%' }} src={personalPhoto} className="z-6 fancy-borderRadius" alt="" />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol style={{ zIndex: 100 }} md="6" sm="12" className="d-flex flex-column justify-content-center mt-2" id="home">
                        <h3 className="mb-4 font-500 text-white animate__animated animate__fadeInDown animate__delay-0.3s">
                            Welcome I am
                        </h3>
                        <div>
                            <h1 className="d-inline-block font-600 mb-4 gradient-color-text gradient-1 animate__animated animate__fadeInDown animate__delay-0.6s">
                                Upekka Chakma
                            </h1>
                        </div>
                        <h3 style={{ color: "#00ccff" }} className="font-400 mb-4 text-white animate__animated animate__fadeInUp animate__delay-2s">
                            <Typewriter
                                options={{
                                    strings: ['I am a web developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>
                        <p style={{ maxWidth: '400px' }} className="lh-lg mb-4 text-white animate__animated animate__fadeInUp animate__delay-1.5s">I am a junior web developer, currently dedicated myself to become even better in the web development field.</p>
                        <a rel="noreferrer" href="https://drive.google.com/uc?export=download&id=15aNGJamac-mXchy7A5T-uCT_7I1z7E03">
                            <button class="box animate__animated animate__fadeInUp animate__delay-1.5s">
                                <span></span>
                                <h3 className="font-400 text-center">My Resume</h3>
                            </button>
                        </a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </div>
    );
};

export default Home;