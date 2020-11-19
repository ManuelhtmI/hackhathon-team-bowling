import React from 'react'
import Navbar from '../navbar/Navbar';
import './general.css'
import Weapon from './Weapons_list/Weapons'

function Weapons() {


    return(
        <div className="container">
            <Navbar />
            <Weapon />
        </div>
    )
}

export default Weapons