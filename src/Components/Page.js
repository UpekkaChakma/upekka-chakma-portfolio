import React from 'react';
import Particles from 'react-particles-js';
import ConfigParticles from './Config/ConfigParticles';
import MyRecord from './MyRecord/MyRecord';
import Service from './Services/Service';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import Home from './Home/Home';
import LeftSidebar from './Sidebar/LeftSidebar';
import RightSidebar from './Sidebar/RightSidebar';
import Technologies from './Technologies/Technologies';

const Page = () => {

    return (
        <div className="background px-2 px-md-5 position-relative">
            <div className='position-absolute pe-none' style={{ inset: 0 }}>
                <Particles height='300vh' width="100%" params={ConfigParticles} />
            </div>
            <LeftSidebar />
            <RightSidebar />
            <div>
                <Home />
                <MyRecord />
                <Technologies />
                <Service />
                <Projects />
                <ContactMe />
            </div>
        </div>
    );
};

export default Page;  