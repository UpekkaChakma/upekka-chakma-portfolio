import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import NavbarPage from '../Navbar/NavbarPage';
import './About.css';

const About = () => {
    return (
        <div style={{ paddingBottom: '50px' }}>
            <NavbarPage></NavbarPage>
            <section id="home">
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol md="6" sm="6" className=" d-sm-flex justify-content-center align-items-center bg-personal-photo" >
                            <div style={{ height: '22rem' }}></div>
                        </MDBCol>
                        <MDBCol md="6" sm="6" className=" d-sm-flex justify-content-center align-items-center p-3" style={{ backgroundColor: 'rgba(10,10,10,255)' }}>
                            <MDBRow>
                                <MDBCol lg="12">
                                    <h2 style={{ fontWeight: '500' }} className="ml-5 text-white animate__animated animate__fadeInUp animate__delay-0.3s" >Phone: +880-183-783-6401</h2>
                                </MDBCol>
                                <MDBCol lg="12">
                                    <h2 style={{ fontWeight: '500' }} className="ml-5 text-white animate__animated animate__fadeInUp animate__delay-0.6s">Upekkachakma@gmail.com</h2>
                                </MDBCol>
                                <MDBCol lg="12">
                                    <h2 style={{ fontWeight: '500' }} className="ml-5 text-white animate__animated animate__fadeInUp animate__delay-0.9s">https://linkedin.com/in/upekka-chakma</h2>
                                </MDBCol>
                                <MDBCol lg="12">
                                    <h2 style={{ fontWeight: '500' }} className="ml-5 text-white animate__animated animate__fadeInUp animate__delay-0.9s">https://github.com/in/UpekkaChakma</h2>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6" sm="12">
                            <MDBRow style={{ height: '300px' }}>
                                <MDBCol lg="12" className=" d-flex justify-content-around align-items-center mb-0 py-3">
                                    <h3 style={{ fontWeight: '500' }} className="animate__animated animate__fadeInUp animate__delay-0.4s">Tools and Technologies</h3>
                                </MDBCol>
                                <MDBCol lg="12" className=" d-flex justify-content-around align-items-center pt-3 animate__animated animate__fadeInUp animate__delay-0.8s">
                                    <a rel="noreferrer" href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="firebase" width="50" height="50" /> </a>
                                </MDBCol>
                                <MDBCol lg="12" className=" d-flex justify-content-around pt-3 animate__animated animate__fadeInUp animate__delay-1.2s">
                                    <a rel="noreferrer" href="https://sass-lang.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://redux.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="50" height="50" /> </a>
                                </MDBCol>
                                <MDBCol className=" d-flex justify-content-around pt-3 animate__animated animate__fadeInUp animate__delay-1s">
                                    <a rel="noreferrer" href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50" /> </a>
                                    <a rel="noreferrer" href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="50" height="50" /> </a>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol className="home-bg" md="3" sm="12"></MDBCol>
                        <MDBCol md="3" sm="12" style={{ backgroundColor: 'rgb(8, 72, 131)', fontWeight: '500' }}>
                            <MDBRow style={{ height: '300px' }}>
                                <MDBCol lg="12" className=" d-flex justify-content-around align-items-center mb-0 pt-3 animate__animated animate__fadeInUp animate__delay-1.1s">
                                    <h3 className="text-white" style={{ fontWeight: '500' }}>Languages</h3>
                                </MDBCol>
                                <MDBCol lg="12" className=" d-flex justify-content-around align-items-center animate__animated animate__fadeInUp animate__delay-1.4s">
                                    <h6 style={{ fontWeight: '500' }} className="text-white">Chakma</h6>
                                </MDBCol>
                                <MDBCol lg="12" className=" d-flex justify-content-around align-items-center animate__animated animate__fadeInUp animate__delay-1.4s">
                                    <h6 style={{ fontWeight: '500' }} className="text-white">Bangla</h6>
                                </MDBCol>
                                <MDBCol lg="12" className=" d-flex justify-content-around align-items-center animate__animated animate__fadeInUp animate__delay-1.8s">
                                    <h6 style={{ fontWeight: '500' }} className="text-white" >English</h6>
                                </MDBCol>
                                <MDBCol lg="12" className=" d-flex justify-content-around align-items-center animate__animated animate__fadeInUp animate__delay-1.8s">
                                    <h6 style={{ fontWeight: '500' }} className="text-white">Hindi and  Urdu</h6>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

        </div>
    );
};

export default About;