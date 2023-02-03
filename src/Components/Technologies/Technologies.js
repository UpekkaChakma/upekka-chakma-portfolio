import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import svg from "./Svg";
import React from 'react';

const Technologies = () => {

    const htmlCssJsNode = [
        {
            title: 'HTML',
            alt: "html-5",
            img: svg.html5,
            className: 'gradient-3',
            width: "clamp(50px, 20%, 80px)"
        },
        {
            title: 'CSS',
            alt: "css-3",
            img: svg.css3,
            className: 'gradient-4',
            width: "clamp(50px, 20%, 80px)"
        },
        {
            title: 'JavaScript',
            alt: "javascript",
            img: svg.JS,
            className: 'gradient-5 ml-1',
            width: '20%'
        },
        {
            title: 'Node',
            alt: "node-js",
            img: svg.Node,
            className: 'gradient-6 ml-2',
            width: '20%'
        }
    ];

    const nextFirebaseHerokuVercel = [
        {
            title: '',
            alt: "next.js",
            img: svg.Next,
            className: '',
            width: 'clamp(90px, 5.5vw, 110px)'
        },
        {
            title: 'Firebase',
            alt: "firebase",
            img: svg.Firebase,
            className: 'gradient-color-text gradient-5 text-center mt-2',
            width: 'clamp(40px, 4vw, 110px)',
            imgClass: 'p-1'
        },
        {
            title: 'Heroku',
            alt: "heroku",
            img: svg.Heroku,
            className: 'gradient-color-text gradient-8 mb-0 ml-2',
            width: 'clamp(30px, 3.7vw, 110px)'
        },
        {
            title: 'Vercel',
            alt: "vercel",
            img: svg.Vercel,
            className: 'text-white mr-1 mb-0 font-500',
            width: 'clamp(40px, 4vw, 110px)',
            imgClass: 'px-1 pb-2'
        }
    ]

    return (
        <MDBContainer size="xl" className="px-4 p-md-3 my-5 pointer-none" id="tools-and-tech">
            <div className="d-md-none d-flex justify-content-center">
                <div className="d-inline-block">
                    <h4 className="mx-auto mb-5 font-600 text-white text-center position-relative">
                        Technologies
                        <h4 className="section-title-alt font-700">ToolsNTech</h4>
                    </h4>
                    <h6 className="text-white text-center p-3 mb-4">
                        click one of the boxes and see what happens
                    </h6>
                </div>
            </div>


            <MDBRow>
                {
                    htmlCssJsNode.map(({ title, alt, img, width, className }) => (
                        <MDBCol key={alt} md="3" size="6" className='p-2'>
                            <div className="h-100 neumorphism py-4 px-3 p-md-3 d-flex flex-row justify-content-center align-items-center">
                                <img src={img} alt={alt} style={{ width: width }} />
                                <h5 className={`${className} gradient-color-text font-600 mb-0`}>{title}</h5>
                            </div>
                        </MDBCol>
                    ))
                }
            </MDBRow>


            <MDBRow center>
                <MDBCol size="12" sm='5' md="3">
                    <MDBCol size="12" className='pb-2 w-100'>
                        <div className="d-flex justify-content-center w-100 p-2 pt-3">
                            <div className="d-flex flex-column justify-content-center align-items-center neumorphism px-4 pt-1 mr-1">
                                <img className='img-width p-1' src={svg.Tailwind} alt="Tailwind" />
                                <h6 className="gradient-color-text gradient-4 text-center font-400 mt-3 mb-0">
                                    Tailwind
                                </h6>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center neumorphism px-3 py-2 ml-2">
                                <img className='img-width p-2' src={svg.bootstrap} alt="bootstrap" />
                                <h6 className="gradient-color-text gradient-8 text-center font-400 mt-2">
                                    Bootstrap
                                </h6>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBRow className='pb-3 px-2'>
                        <div className="neumorphism p-3 p-md-2 d-flex flex-column w-100">
                            <img className='mx-auto img-width' src={svg.ReactSvg} alt="React" />
                            <h6 className="gradient-color-text gradient-4 text-center mt-2 font-600">
                                React
                            </h6>
                        </div>
                    </MDBRow>
                    <MDBRow className='pb-0 px-2'>
                        <div className="neumorphism p-3 p-md-2 d-flex flex-column w-100">
                            <img className='brightness-1 img-width p-2 mx-auto' src={svg.Redux} alt="Redux" />
                            <h6 className="gradient-color-text gradient-8 text-center mt-2 font-600">
                                Redux
                            </h6>
                        </div>
                    </MDBRow>
                </MDBCol>

                <MDBCol md="6" className='d-none d-md-block'>
                    <MDBRow className='px-4 py-3 h-100'>
                        <div className="bg-white-gradient p-5 bg d-flex justify-content-center align-items-center w-100" >
                            <h4 className="gradient-color-text gradient-1 text-center font-700">
                                Tools and Technologies I have worked with
                            </h4>
                        </div>
                    </MDBRow>
                </MDBCol>

                <MDBCol size="12" sm='5' md="3" className='w-100'>
                    <MDBRow className='p-3 p-md-2 p-md-2'>
                        <div className="neumorphism py-2 d-flex flex-column w-100">
                            <img className='mx-auto img-width p-2 mr-1' src={svg.MongoDB} alt="MongoDB" />
                            <h6 className="gradient-color-text gradient-6 text-center font-600 mt-2">
                                MongoDB
                            </h6>
                        </div>
                    </MDBRow>

                    <MDBRow className='p-2'>
                        <div className="neumorphism px-2 py-1 d-flex flex-column w-100">
                            <div className="d-flex flex-column justify-content-center align-items-center py-3">
                                <h4 className='mb-0'>express</h4>
                                <h6>JS</h6>
                            </div>
                        </div>
                    </MDBRow>
                    <MDBRow className='p-3 p-md-2'>
                        <div className="d-flex justify-content-center w-100">
                            <div className="d-flex flex-column justify-content-center align-items-center neumorphism px-4 py-2 mr-1">
                                <img className='img-width rounded-circle bg-white p-1' src={svg.Github} alt="Github" />
                                <h6 className="text-white text-center font-400 mt-2">
                                    GitHub
                                </h6>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center neumorphism px-4 py-2 ml-2">
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
                {
                    nextFirebaseHerokuVercel.map(({ title, alt, img, width, className, imgClass }) => (
                        <MDBCol key={alt} md="3" size="6" className='text-white p-2'>
                            <div className="neumorphism p-4 d-flex flex-row justify-content-center align-items-center h-100">
                                <img className={imgClass && imgClass} src={img} alt="Vercel" style={{ width: width }} />
                                <h5 className={`${className} font-600`}>{title}</h5>
                            </div>
                        </MDBCol>
                    ))
                }
            </MDBRow>

        </MDBContainer>
    )
}

export default Technologies




