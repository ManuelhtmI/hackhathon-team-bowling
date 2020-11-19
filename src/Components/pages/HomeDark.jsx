import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer'
import { useEffect } from 'react'
import Element from './Element';

function HomeDark() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div>
            <Navbar />
            <Element />
            <Footer />
        </div>
    );
}

export default HomeDark