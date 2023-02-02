import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import paperPlane from '../../Images/paper-plane.svg';
import Modal from './Modal';


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
        <MDBContainer size="xl" className="px-3 py-4 mb-5" id="contact">

            <Modal modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                isDelivered={isDelivered}
            />

            <div className="d-flex justify-content-center mb-3 my-md-5">
                <h4 className="gradient-1 gradient-color-text font-600">Get In Touch</h4>
            </div>
            <MDBRow center>
                <MDBCol size="11" md="5" className="p-3 my-4">
                    <div className="bg-white-gradient h-100" style={{ minHeight: '390px' }}>
                        <iframe title="bangladesh-map" id="gmap_canvas" src="https://maps.google.com/maps?q=bangladesh&t=k&z=7&ie=UTF8&iwloc=&output=embed" frameBorder={0} className="w-100 h-100 radius-14">
                        </iframe>
                    </div>
                </MDBCol>

                <MDBCol size="11" md="5" className="p-3 ml-md-4">
                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email"
                            className="mt-3 mt-md-0">
                            <h5 className="gradient-4 gradient-color-text font-500">
                                Email
                            </h5>
                        </label>
                        <input {...register("email", { required: true })}
                            name="email"
                            type="email"
                            id="email"
                            spellCheck="false"
                            className="neumorphism-inner-shadow p-3 mb-3 w-100"
                        />

                        <label htmlFor="message">
                            <h5 className="gradient-4 gradient-color-text font-500">
                                Message
                            </h5>
                        </label>
                        <textarea {...register("message", { required: true })}
                            name="message"
                            type="text"
                            id="message"
                            rows={7}
                            spellCheck="false"
                            className="neumorphism-inner-shadow p-3 w-100 mb-3">
                        </textarea>

                        <MDBBtn type="submit"
                            className="text-capitalize w-100 p-2 font-700 rounded-pill"
                            color="indigo radius-14" >
                            <h5 className="mb-0 font-500">
                                Submit <img src={paperPlane} alt="paper-plane" style={{ width: "24px", marginBottom: '7px' }} />
                            </h5>
                        </MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );

};

export default FormPage;