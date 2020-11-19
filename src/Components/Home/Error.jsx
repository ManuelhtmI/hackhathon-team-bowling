import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <div className="fakehead">
                <div className='fakelogo'>
                    <a href='fakehead' className='fpusa'>FPUSA</a>
                </div>
                <div className='fakenavbar'>
                    <a href='.fakehead' className='nav'>Results</a>
                    <a href='.fakehead' className='nav'>Standing</a>
                    <a href='.fakehead' className='nav'>Schedule</a>
                </div>
            </div>
            <div className='head'>
                <h1 className='error'>ERROR 404</h1>
                <h2 className='found'>PAGE NOT FOUND</h2>
            </div>
            <div className='fakefoot'>
                <div ><a href='https://policies.google.com/privacy?hl=en' className='fakelink'>Privacy</a></div>
                <div><a href="https://policies.google.com/faq?hl=en" className='fakelink'>Accessibility</a></div>
                <div><a href='https://policies.google.com/terms?hl=en' className='fakelink'>Terms</a></div>
                <div><Link className="Link_Cookie" to="/HomeDark">Cookie</Link></div>
            </div>
        </div>
    )
}

export default Error
