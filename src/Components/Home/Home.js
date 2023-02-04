import { MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import React from 'react';
import personalPhoto from '../../Images/personal-photo.png';
import Typewriter from 'typewriter-effect';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const Home = () => {
    // RiFacebookCircleLine, FiGithub SlSocialLinkedin
    return (
        <MDBContainer className="min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative" id='go-home' >
            <Fade top>
                <h3 className="welcome gradient-color-text">
                    Welcome!
                </h3>
            </Fade>
            <Zoom delay={500}>
                <MDBRow className="d-flex justify-content-center align-items-center mb-3 bg-white-gradient-round">
                    <img style={{ width: 'clamp(6rem, 14vw, 14rem)', border: '2px solid transparent' }} src={personalPhoto} className="z-6 " alt="upekka" />
                </MDBRow>
            </Zoom>
            <Zoom delay={1000}>
                <h6 className="bg-white-gradient-2 text-white mb-4 animate__animated animate__fadeInDown animate__delay-0.6s">
                    Upekka Chakma
                </h6>
            </Zoom>
            <h6 style={{ color: "#00ccff" }} className="font-400 mb-4 text-white animate__animated animate__fadeInUp animate__delay-2s">
                <Typewriter
                    options={{
                        strings: ['Available for Work. Please Hire Me'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h6>
            <Flip bottom cascade delay={1500} duration={2500}>
                <p style={{ maxWidth: '400px' }} className="lh-lg mb-4 text-white">I am a junior web developer, currently dedicated myself to become even better in the web development field.</p>
            </Flip>
            <Fade bottom delay={3500}>
                <a rel="noreferrer" href="https://drive.google.com/uc?export=download&id=15aNGJamac-mXchy7A5T-uCT_7I1z7E03">
                    <MDBBtn color='primary' className="rounded-pill">
                        my resume
                    </MDBBtn>
                </a>
            </Fade>


        </MDBContainer >
    );
};

export default Home;