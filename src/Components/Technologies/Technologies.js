import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import svg from "./Svg";

import React from 'react'

const Technologies = () => {
    return (
        <MDBContainer size="xl" className="p-3 pointer-none">


            <MDBRow >
                <MDBCol md="3" size="6" className='text-white p-3'>
                    <div className="h-100 neumorphism p-3 d-flex flex-row justify-content-center align-items-center">
                        <img className='radius-14 p-1 mr-2' src={svg.html5} alt="html-5" style={{ backgroundColor: 'rgba(305, 69, 0, 0.1)', width: '35%' }} />
                        <h5 className='gradient-color-text gradient-3 font-600 mb-0'>HTML</h5>
                    </div>
                </MDBCol>
                <MDBCol md="3" size="6" className='text-white p-3'>
                    <div className="h-100 neumorphism p-3 d-flex flex-row justify-content-center align-items-center">
                        <img className='radius-14 p-1 mr-2' src={svg.css3} alt="css3" style={{ backgroundColor: 'rgba(305, 305, 305, 0.08)', width: '35%' }} />
                        <h5 className='gradient-color-text gradient-4 font-600 mb-0'>CSS</h5>
                    </div>
                </MDBCol>
                <MDBCol md="3" size="6" className='text-white p-3'>
                    <div className="h-100 neumorphism p-3 d-flex flex-row justify-content-center align-items-center">
                        <img src={svg.JS} alt="javascript" style={{ width: '30%' }} />
                        <h5 className='gradient-color-text gradient-5 font-600 mb-0 ml-1'>JavaScript</h5>
                    </div>
                </MDBCol>
                <MDBCol md="3" size="6" className='text-white p-3'>
                    <div className="h-100 neumorphism p-3 d-flex flex-row justify-content-center align-items-center">
                        <h5 className='gradient-color-text gradient-6 font-600 mr-1 mb-0'>Node</h5>
                        <img src={svg.Node} alt="css3" style={{ width: '30%' }} />
                    </div>
                </MDBCol>
            </MDBRow>


            <MDBRow>

                <MDBCol md="3" id='flex-col-noWrap'>
                    <MDBRow className='p-3 '>
                        <div className="d-flex justify-content-center w-100">
                            <div className="d-flex flex-column justify-content-center align-items-center neumorphism px-3 pt-1 m-2">
                                <img className='img-width p-1' src={svg.Tailwind} alt="Tailwind" />
                                <h6 className="gradient-color-text gradient-4 text-center font-600 mt-3 mb-0">
                                    Tailwind
                                </h6>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center neumorphism px-3 pt-1 m-2">
                                <img className='img-width p-2' src={svg.bootstrap} alt="bootstrap" />
                                <h6 className="gradient-color-text gradient-8 text-center font-600 mt-2">
                                    Bootstrap
                                </h6>
                            </div>
                        </div>
                    </MDBRow>
                    <MDBRow className='p-3' sm="6">
                        <div className="neumorphism p-2 d-flex flex-column w-100 w-100">
                            <img className='mx-auto img-width' src={svg.ReactSvg} alt="React" />
                            <h6 className="gradient-color-text gradient-4 text-center mt-2 font-600">
                                React
                            </h6>
                        </div>
                    </MDBRow>
                    <MDBRow className='p-3'>
                        <div className="neumorphism p-2 d-flex flex-column w-100">
                            <img className='brightness-1 img-width p-2 mx-auto' src={svg.Redux} alt="Redux" />
                            <h6 className="gradient-color-text gradient-8 text-center mt-2 font-600">
                                Redux
                            </h6>
                        </div>
                    </MDBRow>
                </MDBCol>

                <MDBCol md="6" >
                    <MDBRow className='p-3 h-100'>
                        <div className="bg-white-gradient p-5 bg d-flex justify-content-center align-items-center w-100" >
                            <h2 className="gradient-color-text gradient-1 text-center font-700 font-120">
                                Tools and Technologies I have worked with
                            </h2>
                        </div>
                    </MDBRow>
                </MDBCol>

                <MDBCol md="3" className='w-100'>
                    <MDBRow className='p-3 '>
                        <div className="neumorphism py-2 d-flex flex-column w-100">
                            <img className='mx-auto img-width p-2 mr-1' src={svg.MongoDB} alt="MongoDB" />
                            <h6 className="gradient-color-text gradient-6 text-center font-600 mt-2">
                                MongoDB
                            </h6>
                        </div>
                    </MDBRow>

                    <MDBRow className='p-3 '>
                        <div className="neumorphism p-2 d-flex flex-column w-100">
                            <div className="d-flex flex-column justify-content-center align-items-center py-2">
                                <h4 className='mb-0'>express</h4>
                                <h6>JS</h6>
                            </div>
                        </div>
                    </MDBRow>
                    <MDBRow className='p-3 '>
                        <div className="d-flex justify-content-center w-100">
                            <div className="d-flex flex-column justify-content-center align-items-center neumorphism px-3 pt-2 m-2">
                                <img className='img-width rounded-circle bg-white p-1' src={svg.Github} alt="Github" />
                                <h6 className="text-white text-center font-600 mt-2">
                                    GitHub
                                </h6>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center neumorphism px-3 pt-1 m-2">
                                <img className='img-width p-2' src={svg.VsCode} alt="VsCode" />
                                <h6 className="gradient-color-text gradient-4 text-center font-600 mt-2">
                                    Vs Code
                                </h6>
                            </div>
                        </div>
                    </MDBRow>
                </MDBCol>
            </MDBRow>

            <MDBRow >
                <MDBCol md="3" size="6" className='text-white p-3'>
                    <div className="h-100 neumorphism p-3 d-flex flex-row justify-content-center align-items-center">
                        <img className='' src={svg.Next} alt="Firebase" style={{ width: '50%' }} />
                    </div>
                </MDBCol>
                <MDBCol md="3" size="6" className='text-white p-3'>
                    <div className="h-100 neumorphism p-3 d-flex flex-row justify-content-center align-items-center">
                        <img className='radius-14 p-1' src={svg.Firebase} alt="Firebase" style={{ width: '30%' }} />
                        <h5 className="gradient-color-text gradient-5 text-center font-600 mt-2">
                            Firebase
                        </h5>
                    </div>
                </MDBCol>
                <MDBCol md="3" size="6" className='text-white p-3'>
                    <div className="h-100 neumorphism p-3 d-flex flex-row justify-content-center align-items-center mb-0">
                        <img src={svg.Heroku} alt="Heroku" style={{ width: '25%' }} />
                        <h5 className='gradient-color-text gradient-8 font-600 mb-0 ml-2'>Heroku</h5>
                    </div>
                </MDBCol>
                <MDBCol md="3" size="6" className='text-white p-3'>
                    <div className="neumorphism p-3 d-flex flex-row justify-content-center align-items-center h-100">
                        <h5 className='font-white mr-1 mb-0'>Vercel</h5>
                        <img className='radius-14 px-1 pb-2' src={svg.Vercel} alt="Vercel" style={{ width: '20%' }} />
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Technologies



