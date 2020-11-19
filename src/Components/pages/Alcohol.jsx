import React from 'react'
import Navbar from '../navbar/Navbar';
import Alcohols from './Alcohol_list/Alcohol'
import { useEffect } from 'react'
import Footer from '../footer/Footer'

function Alcohol() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div>
            <Navbar />
            <Alcohols />
            <Footer />
        </div>
    )
}

export default Alcohol