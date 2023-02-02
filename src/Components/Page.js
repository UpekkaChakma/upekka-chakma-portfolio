import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import NavbarPage from './Navbar/NavbarPage';
import Particles from 'react-particles-js';
import ConfigParticles from './Config/ConfigParticles';
import Typewriter from 'typewriter-effect';
import MyRecord from './MyRecord/MyRecord';
import Service from './Services/Service';
import ContactMe from './ContactMe/ContactMe';
import About from './About/About';
import LeftSidebar from './Sidebar/LeftSidebar';
import RightSidebar from './Sidebar/RightSidebar';
import Technologies from './Technologies/Technologies';

const Page = () => {

    return (
        <div className="background px-2 px-md-5">
            <LeftSidebar />
            <RightSidebar />
            {/* <div className='position-absolute pe-none'>
                <Particles height="90vh" width="100vw" params={ConfigParticles} />
            </div> */}

            <div className=''>
                <MyRecord />
                <Technologies />
                <Service />
                <ContactMe id="contact" />
            </div>
        </div>
    );
};

export default Page;