import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBTypography } from 'mdbreact';
import noteImg from '../../Images/note.png';
import NavbarPage from '../Navbar/NavbarPage';

const Blog = () => {
    return (
        <div style={{backgroundColor: 'rgba(10,25,47,255)', paddingBottom: '50px'}}>
            <NavbarPage></NavbarPage>
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
                    <MDBCol lg="4" sm="12" className="mb-4">
                        <MDBCard className="d-fex justify-content-center align-items-center p-3">
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
                        <MDBCard className="d-fex justify-content-center align-items-center p-3">
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
                        <MDBCard className="d-fex justify-content-center align-items-center p-3">
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
                        <MDBCard className="d-fex justify-content-center align-items-center p-3">
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
                        <MDBCard className="d-fex justify-content-center align-items-center p-3">
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
                        <MDBCard className="d-fex justify-content-center align-items-center p-3">
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