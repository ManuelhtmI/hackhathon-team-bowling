import React from 'react'
import Navbar from '../navbar/Navbar';
import './general.css'
import Alcohols from './Alcohol_list/Alcohol'

function Alcohol() {


    return(
        <div className="container">
            <Navbar />
            <Alcohols />
        </div>
    )
}

export default Alcohol