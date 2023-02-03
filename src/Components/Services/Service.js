import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import { TbBrandHtml5 } from "react-icons/tb";
// import { RiCodeLine } from "react-icons/ri";
import { SlSocialGoogle, SlScreenTablet } from "react-icons/sl";
import { HiOutlineServer } from "react-icons/hi2";

const Service = () => {
    //  

    const myServices = [
        {
            Icon: SlScreenTablet,
            alt: "front-end",
            serviceName: "Front-End",
            classList: 'p-1',
            specificList: [
                "Modern Looking Website", "Responsive Design", "Better UI/UX", "All Modern Browser Support", "Lorem Ipsum", "Lorem2 Ipsum"
            ]
        },
        {
            Icon: HiOutlineServer,
            alt: "back-end",
            serviceName: "Back-End",
            specificList: [
                "Creating Restful API", "Authentication", "Maintaining best security practices", "CRUD Operations"
            ]
        },
        {
            Icon: TbBrandHtml5,
            alt: "html-5",
            serviceName: "Any to HTML",
            specificList: [
                "Converting Any Design To Webpage", "Pixel Perfect Design", "PSD & Figma To HTML", "A little design knowledge about Figma"
            ]
        },
        {
            Icon: SlSocialGoogle,
            alt: "search-engine-optimization",
            serviceName: "SEO",
            classList: 'p-1',
            specificList: [
                "Converting Any Design To Webpage", "Pixel Perfect Design", "PSD & Figma To HTML", "A little design knowledge about Figma"
            ]
        }
    ];


    return (
        <MDBContainer breakpoint="xl" className='py-5 my-5'>
            <div className="d-flex justify-content-center ">
                <div className="d-inline-block">
                    <h4 className="mx-auto mb-5 font-600 text-white z-100 position-relative">
                        What Can I Do
                        <h4 className="section-title-alt font-700">Services</h4>
                    </h4>
                </div>
            </div>
            <h6 className="text-white text-center p-3 mb-4">
                <span className='gradient-color-text gradient-4 font-600 mr-1'>
                    click
                </span>
                one of the boxes and see what happens
            </h6>
            <MDBRow center className='p-3'>
                {
                    myServices.map(({ serviceName, classList, specificList, Icon, alt }) => (
                        <MDBCol size="12" sm="4"
                            key={alt}
                            className='p-1 m-1 d-flex align-items-center'>
                            <MDBCol className='d-flex flex-column justify-content-center align-items-center py-4 neumorphism'>
                                <Icon className={classList && classList} style={{ fontSize: "3rem", color: 'white' }} />
                                <h5 className="text-white font-500 py-3">{serviceName}</h5>
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
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </MDBContainer>
    )
}

export default Service