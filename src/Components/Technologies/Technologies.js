import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import svg from "./Svg";
import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

const Technologies = () => {

    const htmlCssJsNode = [
        {
            title: 'HTML',
            alt: "html-5",
            img: svg.html5,
            className: 'gradient-3',
            width: "clamp(50px, 20%, 80px)",
            delay: 1200
        },
        {
            title: 'CSS',
            alt: "css-3",
            img: svg.css3,
            className: 'gradient-4',
            width: "clamp(50px, 20%, 80px)",
            delay: 800
        },
        {
            title: 'JavaScript',
            alt: "javascript",
            img: svg.JS,
            className: 'gradient-5 ml-1',
            width: '20%',
            delay: 400
        },
        {
            title: 'Node',
            alt: "node-js",
            img: svg.Node,
            className: 'gradient-6 ml-2',
            width: '20%',
            delay: 0
        }
    ];

    const nextFirebaseHerokuVercel = [
        {
            title: '',
            alt: "next.js",
            img: svg.Next,
            className: '',
            width: 'clamp(90px, 5.5vw, 110px)',
            delay: 800
        },
        {
            title: 'Firebase',
            alt: "firebase",
            img: svg.Firebase,
            className: 'gradient-color-text gradient-5 text-center mt-2',
            width: 'clamp(40px, 4vw, 110px)',
            imgClass: 'p-1',
            delay: 1200
        },
        {
            title: 'Heroku',
            alt: "heroku",
            img: svg.Heroku,
            className: 'gradient-color-text gradient-8 mb-0 ml-2',
            width: 'clamp(30px, 3.7vw, 110px)',
            delay: 1600
        },
        {
            title: 'Vercel',
            alt: "vercel",
            img: svg.Vercel,
            className: 'text-white mr-1 mb-0 font-500',
            width: 'clamp(40px, 4vw, 110px)',
            imgClass: 'px-1 pb-2',
            delay: 2000
        }
    ]

    return (
        <MDBContainer size="xl" className="px-4 py-5 p-md-5 my-5 pointer-none" id="tools-and-tech">
            <div className="d-md-none d-flex justify-content-center">
                <div className="d-inline-block">
                    <h4 className="mx-auto font-600 text-white text-center position-relative">
                        Technologies
                        <h4 className="section-title-alt font-700">Tools-Tech</h4>
                    </h4>
                    <h6 className="text-white text-center p-3 py-4 my-4">
                        I have good working knowledge on these languages and libraries.
                    </h6>
                </div>
            </div>


            <MDBRow>
                {
                    htmlCssJsNode.map(({ title, alt, img, width, className, delay }) => (
                        <MDBCol key={alt} md="3" size="6" className='p-2 neumorphism'>
                            <Slide left delay={delay}>
                                <div className="h-100 py-4 px-3 p-md-3 d-flex flex-row justify-content-center align-items-center">
                                    <img src={img} alt={alt} style={{ width: width }} />
                                    <h5 className={`${className} gradient-color-text font-600 mb-0`}>{title}</h5>
                                </div>
                            </Slide>
                        </MDBCol>
                    ))
                }
            </MDBRow>


            <MDBRow center>
                <MDBCol size="12" sm='5' md="3">
                    <MDBRow>
                        <MDBCol size="6" className="neumorphism p-2">
                            <Bounce>
                                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                                    <img className='img-width p-1' src={svg.Tailwind} alt="Tailwind" />
                                    <h6 className="gradient-color-text gradient-4 text-center font-400 mt-3 mb-0">
                                        Tailwind
                                    </h6>
                                </div>
                            </Bounce>
                        </MDBCol>
                        <MDBCol size="6" className="neumorphism p-2">
                            <Bounce delay={500}>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img className='img-width p-2' src={svg.bootstrap} alt="bootstrap" />
                                    <h6 className="gradient-color-text gradient-8 text-center font-400 mt-2">
                                        Bootstrap
                                    </h6>
                                </div>
                            </Bounce>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='p-2 neumorphism'>
                        <div className="p-1 d-flex flex-column w-100">
                            <Flip top>
                                <img className='mx-auto pt-2 img-width' src={svg.ReactSvg} alt="React" />
                                <h6 className="gradient-color-text gradient-4 text-center mt-2 font-600">
                                    React
                                </h6>
                            </Flip>
                        </div>
                    </MDBRow>
                    <MDBRow className='pb-0 px-2 neumorphism '>
                        <div className="p-1 d-flex flex-column w-100">
                            <Flip top delay={500}>
                                <img className='img-width p-2 mx-auto' src={svg.Redux} alt="Redux" style={{ width: "clamp(40px, 26%, 80px)" }} />
                                <h6 className="gradient-color-text gradient-8 text-center mt-2 font-500">
                                    Redux
                                </h6>
                            </Flip>
                        </div>
                    </MDBRow>
                </MDBCol>

                <MDBCol md="6" className='d-none d-md-block overflow-hidden neumorphism '>
                    <MDBRow className='h-100'>
                        <div className=" p-5 bg d-flex justify-content-center align-items-center w-100" >
                            <h4 className="gradient-color-text gradient-1 text-center font-700">
                                Tools and Technologies I have worked with
                            </h4>
                        </div>
                    </MDBRow>
                </MDBCol>

                <MDBCol size="12" sm='5' md="3" className='w-100'>
                    <MDBRow>
                        <div className="neumorphism py-3 py-md-2 d-flex flex-column w-100">
                            <Flip top>
                                <img className='mx-auto img-width p-2 mr-1' src={svg.MongoDB} alt="MongoDB" />
                                <h6 className="gradient-color-text gradient-6 text-center font-600 mt-2">
                                    MongoDB
                                </h6>
                            </Flip>
                        </div>
                    </MDBRow>

                    <MDBRow>
                        <div className="neumorphism px-2 py-1 d-flex flex-column w-100">
                            <Flip top delay={500}>
                                <div className="d-flex flex-column justify-content-center align-items-center py-3 py-md-2">
                                    <h4 className='mb-0'>express</h4>
                                    <h6>JS</h6>
                                </div>
                            </Flip>
                        </div>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="6" className="p-2 neumorphism">
                            <Bounce>
                                <div className="d-flex flex-column justify-content-center align-items-center pt-2">
                                    <img className='img-width rounded-circle bg-white p-1' src={svg.Github} alt="Github" />
                                    <h6 className="text-white text-center font-400 mt-2">
                                        GitHub
                                    </h6>
                                </div>
                            </Bounce>
                        </MDBCol>
                        <MDBCol size="6" className="p-2 neumorphism">
                            <Bounce delay={500}>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img className='img-width p-2' src={svg.VsCode} alt="VsCode" />
                                    <h6 className="gradient-color-text gradient-4 text-center font-600 mt-2">
                                        Vs Code
                                    </h6>
                                </div>
                            </Bounce>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>

            <MDBRow >
                {
                    nextFirebaseHerokuVercel.map(({ title, alt, img, width, className, imgClass, delay }) => (
                        <MDBCol key={alt} md="3" size="6" className='neumorphism text-white p-2'>
                            <Slide right delay={delay}>
                                <div className="p-4 d-flex flex-row justify-content-center align-items-center h-100">
                                    <img className={imgClass && imgClass} src={img} alt="Vercel" style={{ width: width }} />
                                    <h5 className={`${className} font-600`}>{title}</h5>
                                </div>
                            </Slide>
                        </MDBCol>
                    ))
                }
            </MDBRow>

        </MDBContainer>
    )
}

export default Technologies




