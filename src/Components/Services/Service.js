import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
// import Database from "../../Images/database-green.png"
// import Butterfly from "../../Images/butterfly-red.png"
// import Chrome from "../../Images/chrome.svg"
// import Firefox from "../../Images/firefox.svg"
import React from 'react';
import { FiHardDrive } from "react-icons/fi";
import { TbBrandHtml5 } from "react-icons/tb";
import { RiCodeLine } from "react-icons/ri";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Service = () => {
    //  

    const myServices = [
        {
            Icon: RiCodeLine,
            alt: "front-end",
            serviceName: "Front-End",
            specificList: [
                "Modern Looking Website", "Responsive Design", "Better UI/UX", "All Modern Browser Support", "Lorem Ipsum", "Lorem2 Ipsum"
            ]
        },
        {
            Icon: FiHardDrive,
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
            Icon: MdOutlineScreenSearchDesktop,
            alt: "search-engine-optimization",
            serviceName: "SEO",
            specificList: [
                "Converting Any Design To Webpage", "Pixel Perfect Design", "PSD & Figma To HTML", "A little design knowledge about Figma"
            ]
        }
    ];


    return (
        <MDBContainer breakpoint="xl" className='py-5'>
            <div className="d-flex justify-content-center">
                <h4 className="mx-auto mb-5 font-600 gradient-color-text gradient-1">What Can I Do</h4>
            </div>
            <MDBRow center className='p-3'>
                {
                    myServices.map(({ serviceName, specificList, Icon, alt }) => (
                        <MDBCol size="12" sm="3"
                            key={alt}
                            className='p-3 d-flex align-items-center'>
                            <MDBCol className='d-flex flex-column justify-content-center align-items-center py-4 neumorphism'>
                                <Icon style={{ fontSize: "3rem", color: 'white' }} />
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