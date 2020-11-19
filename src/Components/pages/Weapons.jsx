import React from 'react'
import Navbar from '../navbar/Navbar';
import Weapon from './Weapons_list/Weapons'
import { useEffect } from 'react'
import Footer from '../footer/Footer'

function Weapons() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div>
            <Navbar />
            <Weapon />
            <Footer />
        </div>
    )
}

export default Weapons