import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBTypography } from 'mdbreact';
import noteImg from '../../Images/note.png';
import wave from '../../Images/Wave-10s-1227px.png';
import NavbarPage from '../Navbar/NavbarPage';

const Blog = () => {
    return (
        <div style={{ backgroundColor: 'rgba(10,25,47,255)', padding: '50px' }}>
            <NavbarPage></NavbarPage>
            <img src={wave} alt="" className='' style={{ width: '100%' }} />
            <MDBContainer className="mt-5 mb-5">
                <MDBTypography tag="h2" colorText="white"
                    className="text-center mb-4 p-2 "
                    style={{ fontWeight: "700" }}>
                    My Blog Post
                </MDBTypography>
                <MDBTypography tag="h6" colorText="white"
                    className="text-center mb-4 p-2 "
                    style={{ fontWeight: "700" }}>
                    In the upcoming days I will be publishing more blog post
                </MDBTypography>
                <MDBRow>
                    <MDBCol lg="4" sm="12" className="mb-4 ">
                        <MDBCard className="d-fex justify-content-center align-items-center p-3 animate__animated animate__fadeInLeft animate__delay-0.3s">
                            <MDBCardImage
                                style={{ width: '80px' }}
                                className="img-fluid" src={noteImg} alt="compliant" border="0" waves />
                            <MDBCardBody className="text-center">
                                <MDBCardTitle>Awesome blog post</MDBCardTitle>
                                <MDBCardText>
                                    Coming soon
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" sm="12" className="mb-4">
                        <MDBCard className="d-fex justify-content-center align-items-center p-3 animate__animated animate__fadeInLeft animate__delay-0.6s">
                            <MDBCardImage
                                style={{ width: '80px' }}
                                className="img-fluid" src={noteImg} alt="compliant" border="0" waves />
                            <MDBCardBody className="text-center">
                                <MDBCardTitle>Awesome blog post</MDBCardTitle>
                                <MDBCardText>
                                    Coming soon
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" sm="12" className="mb-4">
                        <MDBCard className="d-fex justify-content-center align-items-center p-3 animate__animated animate__fadeInLeft animate__delay-0.9s">
                            <MDBCardImage
                                style={{ width: '80px' }}
                                className="img-fluid" src={noteImg} alt="compliant" border="0" waves />
                            <MDBCardBody className="text-center">
                                <MDBCardTitle>Awesome blog post</MDBCardTitle>
                                <MDBCardText>
                                    Coming soon
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" sm="12" className="mb-4">
                        <MDBCard className="d-fex justify-content-center align-items-center p-3 animate__animated animate__fadeInRight animate__delay-0.3s" >
                            <MDBCardImage
                                style={{ width: '80px' }}
                                className="img-fluid" src={noteImg} alt="compliant" border="0" waves />
                            <MDBCardBody className="text-center">
                                <MDBCardTitle>Awesome blog post</MDBCardTitle>
                                <MDBCardText>
                                    Coming soon
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" sm="12" className="mb-4">
                        <MDBCard className="d-fex justify-content-center align-items-center p-3 animate__animated animate__fadeInRight animate__delay-0.1s">
                            <MDBCardImage
                                style={{ width: '80px' }}
                                className="img-fluid" src={noteImg} alt="compliant" border="0" waves />
                            <MDBCardBody className="text-center">
                                <MDBCardTitle>Awesome blog post</MDBCardTitle>
                                <MDBCardText>
                                    Coming soon
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" sm="12" className="mb-4">
                        <MDBCard className="d-fex justify-content-center align-items-center p-3 animate__animated animate__fadeInRight animate__delay-0.9s">
                            <MDBCardImage
                                style={{ width: '80px' }}
                                className="img-fluid" src={noteImg} alt="compliant" border="0" waves />
                            <MDBCardBody className="text-center">
                                <MDBCardTitle>Awesome blog post</MDBCardTitle>
                                <MDBCardText>
                                    Coming soon
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Blog;