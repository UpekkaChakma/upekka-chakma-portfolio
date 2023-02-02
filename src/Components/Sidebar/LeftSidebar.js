import React from 'react'
import { Link } from 'react-scroll'
import { BiHomeAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BsGrid1X2 } from "react-icons/bs";
import { TbBrandJavascript, TbBoxMultiple9 } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import "../../App.css"


const LeftSidebar = () => {
    const sidenavLinks = [
        {
            title: 'Home',
            link: "/",
            Icon: BiHomeAlt
        },
        {
            title: 'Web dev journey',
            link: "web-dev-journey-in-numbers",
            Icon: TbBoxMultiple9
        },
        {
            title: 'Services',
            link: "services",
            Icon: RiServiceLine
        },
        {
            title: 'Tools & technologies',
            link: "tools-and-tech",
            Icon: TbBrandJavascript
        },

        {
            title: 'Projects',
            link: "projects",
            Icon: BsGrid1X2,
            size: '.8rem'
        },
        {
            title: 'Email Me',
            link: "contact",
            Icon: CiMail
        }
    ]
    return (
        <div className='position-fixed px-1 px-md-2 nav'>
            <div className="gradient-white d-none d-md-block" style={{ height: '17vh', width: '1px' }}></div>
            {
                sidenavLinks.map(({ title, link, Icon, size }) =>
                    <Link key={title}
                        activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <div className="rounded-circle bg-white-gradient-2 my-2 p-3 d-flex justify-content-center align-items-center" style={{ width: '25px', height: '25px' }}>
                            <h5 className="pt-1" >
                                <Icon style={{ fontSize: size ? size : '1.2rem' }} />
                            </h5>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default LeftSidebar