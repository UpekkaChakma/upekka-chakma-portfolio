import React from 'react'
import LeftSidebar from './Sidebar/LeftSidebar'

const Layout = ({ children }) => {
    return (
        <div className='position-relative min-vh-100 background'>
            <LeftSidebar />
            {children}
        </div>
    )
}

export default Layout