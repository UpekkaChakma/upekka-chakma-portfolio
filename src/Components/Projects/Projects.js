import React from 'react';
import {
    MDBCol, MDBContainer, MDBRow,
} from "mdbreact";
import Carousel from './Carousel';
import { projectGameShop, projectJewelleryShop, projectAddToCart, projectPlanDesign, projectPlanAndDesign } from './assets';
import { Fade, Flip } from 'react-reveal';

const Projects = () => {
    return (
        <MDBContainer size="xl" id="projects" className='my-5 py-5'>
            <MDBRow className='d-flex flex-column mb-md-5'>
                <Fade duration={6000}>
                    <div className="d-flex justify-content-center ">
                        <div className="d-inline-block">
                            <h4 className="mx-auto mb-5 font-600 text-white z-100 position-relative">
                                My Projects
                                <h4 className="section-title-alt font-600">Works</h4>
                            </h4>
                        </div>
                    </div>
                </Fade>
                <Flip top delay={1500}>
                    <h6 className="text-white text-center p-2 font-300">
                        Best projects of mine are included here with 2 full-stack projects
                    </h6>
                </Flip>
            </MDBRow>
            <MDBRow center className='px-2 py-4 neumorphism mx-md-5'>
                <MDBCol size="12">
                    <Carousel props={projectGameShop} />
                </MDBCol>
                <MDBCol size="12" md='6' className='mt-4 mb-0'>
                    <Carousel props={projectJewelleryShop} />
                </MDBCol>
                <MDBCol size="12" md='6' className='mt-4 mb-0 pl-md-2'>
                    <Carousel props={projectAddToCart} />
                </MDBCol>
                <MDBCol size="12" md='6' className='mt-4 mb-0'>
                    <Carousel props={projectPlanAndDesign} />
                </MDBCol>
                <MDBCol size="12" md='6' className='mt-4 mb-0 pl-md-2'>
                    <Carousel props={projectPlanDesign} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Projects;