import React from 'react'
import Articles from '../Articles/Articles'
import { useEffect } from 'react'
import Footer from '../footer/Footer'

function Element() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return(
        <div>
            <Articles />
        </div>
    )
}

export default Element