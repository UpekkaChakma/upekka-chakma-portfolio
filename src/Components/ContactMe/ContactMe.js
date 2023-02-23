import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { IoPaperPlane } from "react-icons/io5";
import Modal from './Modal';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

const FormPage = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isDelivered, setIsDelivered] = useState(false);

    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        emailjs.sendForm('service_kvg7pws', 'template_8umhvnp', "contact-form", 'user_ScyhCf9d8rf5S4WX53aTb')
            .then((result) => {
                setModalIsOpen(true);
                setIsDelivered(true)
            })
            .catch(error => {
                setModalIsOpen(true);
            });
    }

    return (
        <MDBContainer size="xl" className="px-2 px-md-4 py-5 my-5" id="contact">

            <Modal modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                isDelivered={isDelivered}
            />
            <Fade duration={6000}>
                <div className="d-flex justify-content-center ">
                    <div className="d-inline-block">
                        <h4 className="mx-auto mb-5 font-600 text-white z-100 position-relative">
                            Get In Touch
                            <h4 className="section-title-alt font-700">EmailMe</h4>
                        </h4>
                    </div>
                </div>
            </Fade>
            <Flip top cascade delay={1500}>
                <h6 className="d-flex justify-content-center text-white font-300 px-3 pt-3 pb-5">
                    <Flip top cascade delay={1000} duration={1000}>
                        Email me at
                    </Flip>
                    <span className="gradient-4 gradient-color-text font-300 ml-1">
                        upekkachakma@gmail.com
                    </span>
                </h6>
            </Flip>
            <MDBRow center className="neumorphism px-2 pb-3 pt-4 mx-0 mx-md-5">
                <MDBCol size="11" md="6">
                    <div className="neumorphism h-100 d-none d-md-block" >
                        <Zoom delay={2500}>
                            <iframe title="bangladesh-map" id="gmap_canvas" src="https://maps.google.com/maps?q=bangladesh&t=k&z=7&ie=UTF8&iwloc=&output=embed" frameBorder={0} className="w-100 h-100 radius-8p">
                            </iframe>
                        </Zoom>
                    </div>
                </MDBCol>
                <MDBCol size="12" md="6">
                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <Zoom delay={500}>
                            <input {...register("email", { required: true })}
                                placeholder="Your Email"
                                name="email"
                                type="email"
                                id="email"
                                spellCheck="false"
                                className="p-3 mb-4 mb-md-5 w-100 text-white"
                            />
                        </Zoom>
                        <Zoom delay={800}>
                            <textarea {...register("message", { required: true })}
                                placeholder="Your message"
                                name="message"
                                type="text"
                                id="message"
                                rows={7}
                                spellCheck="false"
                                className="p-3 w-100 mb-3 mb-md-4">
                            </textarea>
                        </Zoom>
                        <Zoom delay={1100}>
                            <MDBBtn type="submit"
                                className="text-capitalize w-100 p-2 mt-md-3 ml-0 font-700 rounded-pill"
                                color="primary" >
                                <h5 className="mb-0 font-400">
                                    Submit <IoPaperPlane />
                                </h5>
                            </MDBBtn>
                        </Zoom>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );

};

export default FormPage;