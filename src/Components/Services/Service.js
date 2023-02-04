import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import { TbBrandHtml5 } from "react-icons/tb";
import { SlSocialGoogle, SlScreenTablet } from "react-icons/sl";
import { HiOutlineServer } from "react-icons/hi2";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

const Service = () => {

    const myServices = [
        {
            Icon: SlScreenTablet,
            alt: "front-end",
            serviceName: "Front-End",
            classList: 'p-1',
            delay: 800,
            specificList: [
                "Modern Looking Website", "Responsive Design", "Better UI/UX", "All Modern Browser Support", "Lorem Ipsum", "Lorem2 Ipsum"
            ]
        },
        {
            Icon: HiOutlineServer,
            alt: "back-end",
            serviceName: "Back-End",
            delay: 1300,
            specificList: [
                "Creating Restful API", "Authentication", "Maintaining best security practices", "CRUD Operations"
            ]
        },
        {
            Icon: TbBrandHtml5,
            alt: "html-5",
            serviceName: "Any to HTML",
            delay: 1700,
            specificList: [
                "Converting Any Design To Webpage", "Pixel Perfect Design", "PSD & Figma To HTML", "A little design knowledge about Figma"
            ]
        },
        {
            Icon: SlSocialGoogle,
            alt: "search-engine-optimization",
            serviceName: "SEO",
            classList: 'p-1',
            delay: 2200,
            specificList: [
                "Converting Any Design To Webpage", "Pixel Perfect Design", "PSD & Figma To HTML", "A little design knowledge about Figma"
            ]
        }
    ];


    return (
        <MDBContainer breakpoint="xl" className='py-5 my-5' id='my-services'>
            <Fade duration={2500}>
                <div className="d-flex justify-content-center pt-5">
                    <div className="d-inline-block">
                        <h4 className="mx-auto mb-5 font-600 text-white z-100 position-relative">
                            What Can I Do
                            <h4 className="section-title-alt font-700">Services</h4>
                        </h4>
                    </div>
                </div>
            </Fade>
            <Flip top cascade delay={500} duration={3000}>
                <h6 className=" d-flex justify-content-center text-white text-center p-3 mb-4">
                    <span className='gradient-color-text gradient-4 font-600 mr-1'>
                        click
                    </span>
                    <Flip top cascade duration={3000}>
                        one of the boxes and see what happens
                    </Flip>
                </h6>
            </Flip>
            <MDBRow center className='p-3'>
                {
                    myServices.map(({ serviceName, classList, specificList, Icon, alt, delay }) => (
                        <MDBCol size="10" sm="4"
                            key={alt}
                            className='p-1 m-2 d-flex flex-column justify-content-center align-items-center py-4 neumorphism'>
                            <Slide cascade bottom delay={delay} duration={400}>
                                <Icon className={classList && classList} style={{ fontSize: "3rem", color: 'white' }} />
                                <h5 className="text-white font-500 py-3">{serviceName}</h5>
                            </Slide>
                            {/* <ul className='list-none'>
                    {
                        specificList.map((list, index) => (
                            <li key={index}>
                                <h6 className="gradient-color-text gradient-4 mb-3 font-400">
                                    {list}
                                </h6>
                            </li>
                        ))
                    }
                </ul> */}
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </MDBContainer>
    )
}

export default Service