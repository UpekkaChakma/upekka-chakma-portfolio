import React from 'react'
import { Link } from 'react-scroll'
import { RiServiceFill, RiHome5Fill } from "react-icons/ri";
import { BsGrid1X2Fill, BsClockFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { MdEmail } from "react-icons/md";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import "../../App.css"


const LeftSidebar = () => {
    const sidenavLinks = [
        {
            title: 'Home',
            link: "go-home",
            Icon: RiHome5Fill
        },
        {
            title: 'My Record',
            link: "web-dev-journey-in-numbers",
            Icon: BsClockFill
        },
        {
            title: 'Tools & technologies',
            link: "tools-and-tech",
            Icon: DiJavascript1
        },
        {
            title: 'Services',
            link: "my-services",
            Icon: RiServiceFill
        },
        {
            title: 'Projects',
            link: "projects",
            Icon: BsGrid1X2Fill,
            size: '.8rem'
        },
        {
            title: 'Email Me',
            link: "contact",
            Icon: MdEmail
        }
    ]
    return (
        <div className='position-fixed px-1 px-md-2 nav'>
            <div className="gradient-white d-none d-md-block" style={{ height: '17vh', width: '1px' }}></div>
            {
                sidenavLinks.map(({ title, link, Icon, size }) =>
                    <Link key={title}
                        id={title}
                        activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        duration={700}
                    >
                        <div className="rounded-circle bg-white-gradient-2 my-2 p-3 d-flex justify-content-center align-items-center nav-child" style={{ width: '25px', height: '25px' }}>
                            <h5 className="pt-1" >
                                <Icon style={{ fontSize: size ? size : '1.2rem' }} />
                            </h5>
                        </div>
                        <ReactTooltip anchorId={title} content={title} place="right" variant="info" />
                    </Link>
                )
            }
        </div>
    )
}

export default LeftSidebar