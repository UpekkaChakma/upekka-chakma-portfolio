import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Database from "../../Images/database-green.png"
import Butterfly from "../../Images/butterfly-red.png"
import Chrome from "../../Images/chrome.svg"
import Firefox from "../../Images/firefox.svg"
import React from 'react'

const Service = () => {

    const myServices = [
        {
            img: Database,
            alt: "database",
            serviceName: "Back-End",
            specificList: [
                "Creating Restful API", "Authentication", "Maintaining best security practices", "CRUD Operations"
            ]
        },
        {
            img: Chrome,
            alt: "browser_chrome",
            serviceName: "Front-End",
            specificList: [
                "Modern Looking Website", "Responsive Design", "Better UI/UX", "All Modern Browser Support", "Lorem Ipsum", "Lorem2 Ipsum"
            ]
        },
        {
            img: Butterfly,
            alt: "butterfly",
            serviceName: "Design",
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
                    myServices.map(({ serviceName, specificList, img, alt }) => (
                        <MDBCol size="12" sm="6" md="4"
                            key={alt}
                            className='p-3 p-md-0 d-flex align-items-center grid-order'>
                            <MDBCol className='d-flex flex-column justify-content-center align-items-center bg-white-gradient-2 py-4'>
                                <img src={img} alt={alt} style={{ width: "30%" }} />
                                <h5 className="text-white font-600 py-3">{serviceName}</h5>
                                <ul className='list-none'>
                                    {
                                        specificList.map((list, index) => (
                                            <li key={index}>
                                                <h6 className="gradient-color-text gradient-4 mb-3 font-400">
                                                    {list}
                                                </h6>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </MDBCol>
                        </MDBCol>
                    ))
                }
            </MDBRow>
        </MDBContainer>
    )
}

export default Service