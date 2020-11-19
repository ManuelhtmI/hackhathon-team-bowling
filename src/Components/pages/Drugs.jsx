import React from 'react'
import Navbar from '../navbar/Navbar';
import Drug from './Drugs_list/Drugs'
import { useEffect } from 'react'
import Footer from '../footer/Footer'

function Drugs() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div>
            <Navbar/>
            <Drug />
            <Footer />
        </div>
    )
}

export default Drugs