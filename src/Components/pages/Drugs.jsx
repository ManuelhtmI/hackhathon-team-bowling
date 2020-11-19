import React from 'react'
import Navbar from '../navbar/Navbar';
import './general.css'
import Drug from './Drugs_list/Drugs'

function Drugs() {


    return(
        <div className="container">
            <Navbar/>
            <Drug />
        </div>
    )
}

export default Drugs