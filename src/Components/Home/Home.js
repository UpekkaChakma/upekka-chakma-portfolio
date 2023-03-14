import { MDBContainer, MDBRow, MDBBtn, MDBCol } from 'mdbreact';
import React from 'react';
import personalPhoto from '../../Images/personal-photo.png';
import Typewriter from 'typewriter-effect';
import { RiFacebookCircleLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <MDBContainer className="min-vh-100 position-relative d-flex justify-content-center align-items-center" id='go-home'>
            <MDBRow className='neumorphism mx-md-5 mx-0 p-2 py-3' style={{ borderRadius: '1.5rem' }}>
                <MDBRow className='neumorphism mx-2 p-3 pr-md-5' style={{ borderRadius: '1.5rem' }}>
                    <MDBCol size='12' md='6' className="d-flex justify-content-center align-items-center">
                        <Zoom delay={500}>
                            <MDBCol>
                                <img style={{ width: 'clamp(10rem, 17vw, 14rem)', borderRadius: '50%' }} src={personalPhoto} className="p-2 z-6 bg-white-gradient" alt="upekka" />
                            </MDBCol>
                        </Zoom>
                    </MDBCol>
                    <MDBCol size='12' md='6' className="my-4 d-md-block d-flex flex-column justify-content-center align-items-center">
                        <Zoom delay={1000}>
                            <h5 className="text-white mb-4 pb-md-1 font-400">
                                Upekka Chakma
                            </h5>
                        </Zoom>
                        <h6 style={{ color: "#00ccff" }} className="font-400 mb-4 pb-md-1 text-white">
                            <Typewriter
                                options={{
                                    strings: ['Available for Work. Hire Me'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h6>
                        <p style={{ maxWidth: '400px' }} className="lh-lg mb-4 pb-md-1 text-white text-center text-md-left font-300">I am a junior web developer, currently dedicated myself to become even better in the web development field.</p>

                        <div className="d-flex align-items-center text-white mb-4 pb-md-1">
                            <Link to={{ pathname: "https://www.facebook.com/upekka.chakma/" }} target="_blank">
                                <RiFacebookCircleLine style={{ fontSize: '1.4rem', color: 'white' }} />
                            </Link>
                            <Link to={{ pathname: "https://github.com/UpekkaChakma/" }} target="_blank">
                                <FiGithub style={{ fontSize: '1.1rem', color: 'white' }} className='mx-4' />
                            </Link>
                            <Link to={{ pathname: "https://www.linkedin.com/in/upekka-chakma/" }} target="_blank">
                                <SlSocialLinkedin style={{ fontSize: '1.1rem', color: 'white' }} />
                            </Link>
                        </div>
                        <Fade bottom delay={3500}>
                            <a rel="noreferrer" href="https://drive.google.com/uc?export=download&id=15aNGJamac-mXchy7A5T-uCT_7I1z7E03">
                                <MDBBtn color='primary' className="rounded-pill px-3 py-2">
                                    my resume
                                </MDBBtn>
                            </a>
                        </Fade>
                    </MDBCol>
                </MDBRow>
            </MDBRow>
        </MDBContainer >
    );
};

export default Home;