import { MDBContainer } from 'mdbreact';
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import BackendCloud from '../../Images/backend-cloud.avif';
import Computer from '../../Images/frontend-computer.webp';
import Code from '../../Images/code.jpg';
import SEO from '../../Images/seo.jpg';

const Service = () => {

    const myServices = [
        {
            img: BackendCloud,
            alt: "back-end",
            title: "Back-End",
            delay: 1300,
            specs: [
                "Creating Restful API", "Authentication", "Maintaining best security practices", "CRUD Operations"
            ]
        },
        {
            img: Computer,
            alt: "front-end",
            title: "Front-End",
            delay: 800,
            specs: [
                "Modern Looking Website", "Responsive Design", "Better UI/UX", "All Modern Browser Support"
            ]
        },
        {
            img: Code,
            alt: "html-5",
            title: "Any to HTML",
            delay: 1700,
            specs: [
                "Converting Any Design To Webpage", "Pixel Perfect Design", "PSD & Figma To HTML", "A little design knowledge about Figma"
            ]
        },
        {
            img: SEO,
            alt: "search-engine-optimization",
            title: "SEO",
            delay: 2200,
            specs: [
                "Converting Any Design To Webpage", "Pixel Perfect Design", "PSD & Figma To HTML", "A little design knowledge about Figma"
            ]
        }
    ];

    const [activeCard, setActiveCard] = useState('');

    const toggleActiveCard = (name) => {
        activeCard === name ? setActiveCard('') : setActiveCard(name);
    }



    return (
        <MDBContainer breakpoint="xl" className='py-5 my-5' id='my-services'>
            <Fade duration={6000}>
                <div className="d-flex justify-content-center pt-5">
                    <div className="d-inline-block">
                        <h4 className="mx-auto mb-5 font-600 text-white z-100 position-relative">
                            What Can I Do
                            <h4 className="section-title-alt font-700">Services</h4>
                        </h4>
                    </div>
                </div>
            </Fade>
            <Flip top cascade delay={1000} duration={2000}>
                <h6 className=" d-flex justify-content-center text-white text-center p-3 mb-4">
                    <span className='gradient-color-text gradient-4 mr-1 font-400'>
                        click
                    </span>
                    <Flip top cascade delay={1500} duration={3000}>
                        one of the boxes and see what happens
                    </Flip>
                </h6>
            </Flip>
            <div className={`mx-md-5 px-md-5 cards-container ${activeCard && 'active'}`}>
                {
                    myServices.map(({ title, img, alt, delay }) => (
                        <Bounce cascade delay={delay}>
                            <div
                                onClick={() => toggleActiveCard(title)}
                                key={alt}
                                className={`p-md-3 w-100 neumorphism card ${activeCard && activeCard === title ? 'active' : 'is-inactive'}`}>
                                <div className="position-relative">
                                    <img src={img}
                                        alt={alt}
                                        className='w-100 rounded-lg aspect-ratio-1 object-cover'
                                    />
                                    <h3 className="card-title text-center font-500 py-0 py-md-2">
                                        {title}
                                    </h3>
                                </div>
                                {/* <ul className={`${activeCard === title && 'active'}`}>
                                    {
                                        specs.map((list, index) => (
                                            <li key={index}>
                                                <span className="text-white text-center font-300">
                                                    {list}
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul> */}
                            </div>
                        </Bounce>
                    ))
                }
            </div>
        </MDBContainer>
    )
}

export default Service