import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import NavbarPage from "../Navbar/NavbarPage";

const FormPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        emailjs.sendForm('service_kvg7pws', 'template_8umhvnp', "contact-form", 'user_ScyhCf9d8rf5S4WX53aTb')
            .then((result) => {
                alert('Message Sent, I\'ll get back to you shortly', result.text);
            }, (error) => {
                alert('An error ocurred, Please try again', error.text);
            });
    }
    return (
        <div style={{ backgroundColor: 'rgba(10,25,47,255)', paddingBottom: '50px' }}>
            <NavbarPage></NavbarPage>
            <MDBContainer>
                <MDBRow className="d-flex justify-content-center align-items-center mt-5">
                    <MDBCol md="4">
                        <MDBCard>
                            <MDBCardBody>
                                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                    <p className="h4 text-center py-2">Get In Touch</p>
                                    <label
                                        htmlFor="defaultFormCardEmailEx"
                                        className="grey-text font-weight-light"
                                    >
                                        Your email
                                </label>
                                    <input {...register("email", { required: true })}
                                        name="email"
                                        type="email"
                                        id="defaultFormCardEmailEx"
                                        className="form-control form-control-sm"
                                    />
                                    <br />
                                    <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                        Your message
                                </label>
                                    <textarea {...register("message", { required: true })}
                                        name="message" type="text" id="defaultFormContactMessageEx" className="form-control form-control-sm" rows="3" />
                                    <div className="text-center py-3 mt-3">
                                        <MDBBtn className="btn btn-default" type="submit" size="sm">
                                            Send
                                    </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default FormPage;