import React from 'react'
import NavbarPPID from '../element/user/Navbar/NavbarPPID'
import { ReactElement } from "react"
import Footer from '../element/user/Footer';
import ButtonToTop from '../element/user/button/ButtonToTop';

interface Props {
    children : ReactElement;
}

const LayoutPPID = ({
    children
} : Props) => {
    return (
        <div className='flex flex-col w-full min-h-screen relative'>
            <NavbarPPID />

            <ButtonToTop />

            <main className='flex-grow'>
                {children}
            </main> 

            <Footer />
        </div>
    )
}

export default LayoutPPID