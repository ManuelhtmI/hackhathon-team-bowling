import './footer.css'
import logo_mafia from "../navbar/img/BOW-logo-mafia.png"

import React from 'react'

function Footer() {
    return (
        <div className="FooterTotal">
            <picture><img className="Img" src={logo_mafia} alt="Logo BOW Mafia"/></picture>
            <p className="TextFooter">The BOW SHOP is a private group.</p>
            <p className="TextFooter">Keep thoses informations for yourself... and just yourself.</p>
        </div>
    )
}

export default Footer
