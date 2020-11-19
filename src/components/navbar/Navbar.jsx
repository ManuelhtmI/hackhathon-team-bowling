import { useEffect, useState } from 'react'
import './navbar.css'

import logo_mafia from "./img/BOW-logo-mafia.png"
import logo_weapon from "./img/BOW-logo-arme.png"
import logo_drugs from "./img/BOW-logo-drogues.png"
import logo_alcohol from "./img/BOW-logo-alcool.png"



function Navbar() {

    let l_mafia = ""
    let l_weapon = ""
    let l_drugs = ""
    let l_alcohol = ""

    const [change, setChange] = useState(0)

    useEffect(() => {

        l_mafia = document.querySelector('.Mafia')
        l_weapon = document.querySelector('.Weapon')
        l_drugs = document.querySelector('.Alcohol')
        l_alcohol = document.querySelector('.Drugs')

        if(change === 0){
            setTimeout(() => {
                l_mafia.style.display = "flex"
                l_weapon.style.display = "none"
                l_drugs.style.display = "none"
                l_alcohol.style.display = "none"
                setChange(1)
            }, 1000);
        }
        else if(change === 1){
            setTimeout(() => {
                l_mafia.style.display = "none"
                l_weapon.style.display = "none"
                l_drugs.style.display = "flex"
                l_alcohol.style.display = "none"
                setChange(2)
            }, 1000);
        }
        else if(change === 2){
            setTimeout(() => {
                l_mafia.style.display = "none"
                l_weapon.style.display = "flex"
                l_drugs.style.display = "none"
                l_alcohol.style.display = "none"
                setChange(3)
            }, 1000);
        }
        else{
            setTimeout(() => {
                l_mafia.style.display = "none"
                l_weapon.style.display = "none"
                l_drugs.style.display = "none"
                l_alcohol.style.display = "flex"
                setChange(0)
            }, 1000);
            
        }
    })

    return (
        <div className="Navbar">
            <picture><img className="Logo Mafia" src={logo_mafia} alt="BOW logo"/></picture>
            <picture><img className="Logo Drugs" src={logo_drugs} alt="BOW logo"/></picture>
            <picture><img className="Logo Weapon" src={logo_weapon} alt="BOW logo"/></picture>
            <picture><img className="Logo Alcohol" src={logo_alcohol} alt="BOW logo"/></picture>
        </div>
    )
}

export default Navbar