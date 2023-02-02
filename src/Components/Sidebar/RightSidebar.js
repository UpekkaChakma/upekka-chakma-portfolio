import React from 'react'
import { Link } from 'react-router-dom';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdFacebook } from "react-icons/md";
import { RxGithubLogo } from "react-icons/rx";
import "../../App.css"


const RightSidebar = () => {
    const sidenavLinks = [
        {
            title: 'github',
            href: "https://github.com/UpekkaChakma/",
            Icon: RxGithubLogo
        },
        {
            title: 'facebook',
            href: "https://www.facebook.com/upekka.chakma/",
            Icon: MdFacebook
        },
        {
            title: 'linedIn',
            href: "https://www.linkedin.com/in/upekka-chakma/",
            Icon: TiSocialLinkedinCircular
        }
    ]
    return (
        <div className='position-fixed px-1 px-md-2 d-none d-md-flex flex-column align-items-center'
            style={{ height: '100dvh', zIndex: '110', bottom: 0, right: 0 }}
        >
            {
                sidenavLinks.map(({ title, href, Icon, size }) =>
                    <Link key={title}
                        to={href}
                    >
                        <h5 className="text-white my-2" >
                            <Icon style={{ fontSize: size ? size : '1.3rem' }} />
                        </h5>
                    </Link>
                )
            }
            <div className="gradient-white-2" style={{ height: '17vh', width: '1px' }}></div>
        </div>
    )
}

export default RightSidebar