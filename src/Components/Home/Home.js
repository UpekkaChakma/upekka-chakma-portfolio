import { MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import React from 'react';
import personalPhoto from '../../Images/personal-photo.png';
import Typewriter from 'typewriter-effect';
import { RiFacebookCircleLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <MDBContainer className="min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative" id='go-home' >
            <Fade top>
                <h3 className="welcome gradient-color-text">
                    Welcome
                </h3>
            </Fade>
            <Zoom delay={500}>
                <MDBRow className="d-flex justify-content-center align-items-center mb-3 bg-white-gradient-round">
                    <img style={{ width: 'clamp(6rem, 14vw, 14rem)', border: '2px solid transparent' }} src={personalPhoto} className="z-6 " alt="upekka" />
                </MDBRow>
            </Zoom>
            <Zoom delay={1000}>
                <h6 className="bg-white-gradient-2 text-white mb-4 font-400">
                    Upekka Chakma
                </h6>
            </Zoom>
            <h6 style={{ color: "#00ccff" }} className="font-400 mb-4 text-white">
                <Typewriter
                    options={{
                        strings: ['Available for Work. Hire Me'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h6>
            <div className="d-flex justify-content-center align-items-center text-white mb-3">
                <Link to={{ pathname: "https://www.facebook.com/upekka.chakma/" }} target="_blank">
                    <RiFacebookCircleLine style={{ fontSize: '1.7rem', color: 'white' }} />
                </Link>
                <Link to={{ pathname: "https://github.com/UpekkaChakma/" }} target="_blank">
                    <FiGithub style={{ fontSize: '1.4rem', color: 'white' }} className='mx-4' />
                </Link>
                <Link to={{ pathname: "https://www.linkedin.com/in/upekka-chakma/" }} target="_blank">
                    <SlSocialLinkedin style={{ fontSize: '1.4rem', color: 'white' }} />
                </Link>
            </div>
            <Flip bottom cascade delay={1500} duration={2500}>
                <p style={{ maxWidth: '400px' }} className="lh-lg mb-4 text-white font-300">I am a junior web developer, currently dedicated myself to become even better in the web development field.</p>
            </Flip>
            <Fade bottom delay={3500}>
                <a rel="noreferrer" href="https://drive.google.com/uc?export=download&id=15aNGJamac-mXchy7A5T-uCT_7I1z7E03">
                    <MDBBtn color='primary' className="rounded-pill px-4 py-2">
                        my resume
                    </MDBBtn>
                </a>
            </Fade>
        </MDBContainer >
    );
};

export default Home;