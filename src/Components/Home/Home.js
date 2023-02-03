import { MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import React from 'react';
import personalPhoto from '../../Images/personal-photo.png';
import Typewriter from 'typewriter-effect';

const Home = () => {
    // RiFacebookCircleLine, FiGithub SlSocialLinkedin
    return (
        <MDBContainer className="min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative">
            <h3 className="welcome gradient-color-text">
                Welcome!
            </h3>
            <MDBRow className="d-flex justify-content-center align-items-center animate__animated animate__fadeInDown animate__delay-1s mb-3 bg-white-gradient-round">
                <img style={{ width: 'clamp(6rem, 14vw, 14rem)', border: '2px solid transparent' }} src={personalPhoto} className="z-6 " alt="upekka" />
            </MDBRow>
            <MDBRow className="d-flex flex-column align-items-center mt-2" id="home">

                <div>
                    <h6 className="bg-white-gradient-2 text-white mb-4 animate__animated animate__fadeInDown animate__delay-0.6s">
                        Upekka Chakma
                    </h6>
                </div>
                <h6 style={{ color: "#00ccff" }} className="font-400 mb-4 text-white animate__animated animate__fadeInUp animate__delay-2s">
                    <Typewriter
                        options={{
                            strings: ['Available for Work. Please Hire Me'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h6>
                <p style={{ maxWidth: '400px' }} className="lh-lg mb-4 text-white animate__animated animate__fadeInUp animate__delay-1.5s">I am a junior web developer, currently dedicated myself to become even better in the web development field.</p>
                <a rel="noreferrer" href="https://drive.google.com/uc?export=download&id=15aNGJamac-mXchy7A5T-uCT_7I1z7E03">
                    <MDBBtn color='primary' className="rounded-pill">
                        my resume
                    </MDBBtn>
                </a>
            </MDBRow>
        </MDBContainer>
    );
};

export default Home;