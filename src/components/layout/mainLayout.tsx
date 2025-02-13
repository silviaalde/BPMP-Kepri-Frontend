import { ReactElement } from "react"
import Footer from "../element/user/Footer"
import Navbar from "../element/user/Navbar/Navbar"
import ButtonToTop from "../element/user/button/ButtonToTop";

interface Props {
    children : ReactElement;
}

const MainLayout = ({
    children
} : Props) => {
    return (
        <div className="flex flex-col w-full min-h-screen relative">
            <Navbar />

            <ButtonToTop />

            <main className="flex-grow">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout