import React from 'react'
import '../Alcohol_list/Alcohol.css'
import Coc from './coc.jpg'
import Hero from './hero.jpg'
import Opi from './opi.jpg'

function Drugs() {
    return (
        <div className="alcohol_list">
            <div className='al_title'>
                <h1 className='alcohol_title'>Drugs</h1>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Cocaine</h2>
                <div className='price'>45$/G</div>
                <img className='alcohol_img' src={Coc} />
                <div className='description'>Cocaine is a powerful nervous system stimulant. Its effects can last from 15 minutes to an hour. The duration of cocaine's effects depends on the amount taken and the route of administration. When inhaled or injected, it causes a numbing effect. Crack cocaine is a smokeable form of cocaine made into small "rocks" by processing cocaine with sodium bicarbonate (baking soda) and water.</div>
                <select id="quantity">
                    <option value="5G">5 Grams : 225$</option>       
                    <option value="20G">20 Grams : 900$</option>
                    <option value="100G">100 Grams : 4500$</option>
                    <option value="1KG">1 Kilogram : 45000$</option>
                </select>
                <button className="button_choice">Valid your choice.</button>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Opium</h2>
                <div className='price'>40$/G</div>
                <img className='alcohol_img' src={Opi} />
                <div className='description'>Opium is a depressant drug, which means it slows down the messages traveling between your brain and body. The opium poppy from which opium is derived is one of the earliest plants of which there is recorded medicinal use.1 Evidence of opium cultivation by the Sumerian people dates to 3400BCE.</div>
                <select id="quantity">
                    <option value="5G">5 Grams : 200$</option>       
                    <option value="20G">20 Grams : 800$</option>
                    <option value="100G">100 Grams : 4000$</option>
                    <option value="1KG">1 Kilogram : 40000$</option>
                </select>
                <button className="button_choice">Valid your choice.</button>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Heroin</h2>
                <div className='price'>35$/G</div>
                <img className='alcohol_img' src={Hero} />
                <div className='description'>Heroin is part of a group of drugs known as opioids. Opioids interact with opioid receptors in the brain and elicit a range of responses within the body; from feelings of pain relief, to relaxation, pleasure and contentment.Heroin is usually injected into a vein, but it’s also smoked, and added to cigarettes and cannabis.</div>
                <select id="quantity">
                    <option value="5G">5 Grams : 175$</option>       
                    <option value="20G">20 Grams : 700$</option>
                    <option value="100G">100 Grams : 3500$</option>
                    <option value="1KG">1 Kilogram : 35000$</option>
                </select>
                <button className="button_choice">Valid your choice.</button>
            </div>
        </div>
    )
}

export default Drugs
