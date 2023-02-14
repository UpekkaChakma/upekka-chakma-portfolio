import React from 'react';
import './Projects.css';
import { MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBRow, MDBTypography, MDBView } from 'mdbreact';
import autoMobile from '../../Images/automobile-service.JPG';
import gameShop from '../../Images/gameshop.JPG';
import epl from '../../Images/Epl-football-clubs.JPG';
import chelseafc from '../../Images/chelsea-players-salary.JPG';
import NavbarPage from '../Navbar/NavbarPage';

const Projects = () => {
    return (
        <div>
            <NavbarPage></NavbarPage>
            <MDBContainer fluid className="background">
                <MDBTypography tag="h2" colorText="white"
                    className="text-center mb-4 p-2 "
                    style={{ fontWeight: "700" }}>
                    My Projects
                </MDBTypography>
                <MDBRow>
                    <MDBCol lg="4" sm="12" className="mb-4 d-flex justify-content-center align-items-center">
                        <MDBCard style={{ maxWidth: "22rem", backgroundColor: 'rgba(255,255,255,0.09)' }}>
                            <MDBView hover zoom>
                                <img
                                    src={autoMobile}
                                    className="img-fluid"
                                    alt=""
                                />
                                <MDBMask className="flex-center">
                                    <a rel="noreferrer" href="https://upex-auto-mobile-care.web.app" target="_blank"><MDBBtn style={{ borderRadius: '7px', fontSize: '13px', fontWeight: '700' }} color="dark" size="sm">Live Link</MDBBtn></a>
                                    <a rel="noreferrer" href="https://github.com/UpekkaChakma/upex-automobile-care-client" target="_blank"><MDBBtn style={{ borderRadius: '7px', fontSize: '13px', fontWeight: '700' }} color="dark" size="sm">Github Code</MDBBtn></a>
                                </MDBMask>
                            </MDBView>
                            <MDBCardBody style={{ color: 'white' }}>
                                <MDBCardTitle>Upex Automobile Care</MDBCardTitle>
                                <MDBCardText style={{ color: 'white' }}>A full-stack react app about automobile services with authentication and, User-part Admin-part</MDBCardText>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" sm="12" className="mb-4 d-flex justify-content-center align-items-center">
                        <MDBCard style={{ maxWidth: "22rem", backgroundColor: 'rgba(255,255,255,0.09)' }}>
                            <MDBView hover zoom>
                                <img
                                    src={gameShop}
                                    className="img-fluid"
                                    alt=""
                                />
                                <MDBMask className="flex-center">
                                    <a rel="noreferrer" href="https://the-game-shop-upek.web.app" target="_blank"><MDBBtn color="dark" size="sm" className='py-2 px-3 br-1'>Live Link</MDBBtn></a>
                                    <a rel="noreferrer" href=" https://github.com/UpekkaChakma/the-game-shop-client" target="_blank"><MDBBtn className='py-2 px-3 br-1' color="dark" size="sm">Github Code</MDBBtn></a>
                                </MDBMask>
                            </MDBView>
                            <MDBCardBody style={{ color: 'white' }}>
                                <MDBCardTitle>The Game Shop</MDBCardTitle>
                                <MDBCardText style={{ color: 'white' }}>A full-stack react app about an online game services with authentication and, User can buy games, Admin can delete and add games, can see user info</MDBCardText>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">React.JS</MDBBadge>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">Node.JS</MDBBadge>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">Express.JS</MDBBadge>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">MongoDB</MDBBadge>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">Firebase</MDBBadge>
                                <MDBBadge style={{ padding: '5px', margin: '2px', }} color="light">MDB React</MDBBadge>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" sm="12" className="mb-4 d-flex justify-content-center align-items-center">
                        <MDBCard style={{ maxWidth: "22rem", backgroundColor: 'rgba(255,255,255,0.09)' }}>
                            <MDBView hover zoom>
                                <img
                                    src={epl}
                                    className="img-fluid"
                                    alt=""
                                />
                                <MDBMask className="flex-center">
                                    <a rel="noreferrer" href="https://gifted-dubinsky-973a12.netlify.app/" target="_blank"><MDBBtn style={{ borderRadius: '7px', fontSize: '13px', fontWeight: '700' }} color="dark" size="sm">Live Link</MDBBtn></a>
                                    <a rel="noreferrer" href="https://github.com/Porgramming-Hero-web-course/English-Premier-League-Clubs" target="_blank"><MDBBtn style={{ borderRadius: '7px', fontSize: '13px', fontWeight: '700' }} color="dark" size="sm">Github Code</MDBBtn></a>
                                </MDBMask>
                            </MDBView>
                            <MDBCardBody style={{ color: 'white' }}>
                                <MDBCardTitle>English Premier League Clubs</MDBCardTitle>
                                <MDBCardText style={{ color: 'white' }}>This project is built with React, react-bootstrap and css on english premier league clubs and their details from TheSportsDB api</MDBCardText>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">React.JS</MDBBadge>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">Netlify</MDBBadge>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">SportsDB Api</MDBBadge>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" sm="12" className="mb-4 d-flex justify-content-center align-items-center">
                        <MDBCard style={{ maxWidth: "22rem", backgroundColor: 'rgba(255,255,255,0.09)' }}>
                            <MDBView hover zoom>
                                <img
                                    src={chelseafc}
                                    className="img-fluid"
                                    alt=""
                                />
                                <MDBMask className="flex-center">
                                    <a rel="noreferrer" href="https://vigilant-kare-87f331.netlify.app/" target="_blank"><MDBBtn style={{ borderRadius: '7px', fontSize: '13px', fontWeight: '700' }} color="dark" size="sm"><MDBIcon fab icon="github" /> Live Link</MDBBtn></a>
                                    <a rel="noreferrer" href="https://github.com/Porgramming-Hero-web-course/simple-react-UpekkaChakma" target="_blank"><MDBBtn style={{ borderRadius: '7px', fontSize: '13px', fontWeight: '700' }} color="dark" size="sm">Github Code</MDBBtn></a>
                                </MDBMask>
                            </MDBView>
                            <MDBCardBody style={{ color: 'white' }}>
                                <MDBCardTitle>Chelsea club players salary</MDBCardTitle>
                                <MDBCardText style={{ color: 'white' }}>This simple project is all about Chelseafc and players salary. By clicking individual players 'add salary' button u can find the total salary amount of the selected players</MDBCardText>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">React.JS</MDBBadge>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">Netlify</MDBBadge>
                                <MDBBadge style={{ padding: '5px', margin: '2px' }} color="light">ES6</MDBBadge>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Projects;