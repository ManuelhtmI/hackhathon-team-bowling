import React from 'react'
import Vodka from './vodka2.jpg'
import Whiskey from './whiskey.jpg'
import Rum from './rum2.jpg'
import './Alcohol.css'


function Alcohol() {
    return (
        <div className="alcohol_list">
            <div className='al_title'>
                <h1 className='alcohol_title'>Alcohol</h1>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Vodka</h2>
                <div className='price'>25$/L</div>
                <img className='alcohol_img' src={Vodka} />
                <div className='description'>Expressed in each vodka bottle is the essence of the finest ingredients from France; soft winter wheat from in and around Picardy plus pure spring water from Gensac in the Cognac region, nurtured and captured from field to bottle in an exclusive process designed and controlled by the extraordinary skills and commitment of our Cellar Master François Thibault.</div>
                <select id="quantity">
                    <option value="5L">5 Liters : 125$</option>       
                    <option value="20L">20 Liters : 500$</option>
                    <option value="50L">50 Liters : 1250$</option>
                    <option value="1Barrel">1 Barrel : 3950$</option>
                </select>
                <button className="button_choice">Valid your choice.</button>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Whiskey</h2>
                <div className='price'>20$/L</div>
                <img className='alcohol_img' src={Whiskey} />
                <div className='description'>Though Kentucky bourbon produced principally from maize is the most emblematic American whiskey, in the 18th century, its ancestor, the Monongahela, was distilled in Pennsylvania exclusively from rye. Rye whiskey is still produced in micro-distilleries established throughout the area, from California to New York.</div>
                <select id="quantity">
                    <option value="5L">5 Liters : 100$</option>       
                    <option value="20L">20 Liters : 400$</option>
                    <option value="50L">50 Liters : 1000$</option>
                    <option value="1Barrel">1 Barrel : 3160$</option>
                </select>
                <button className="button_choice">Valid your choice.</button>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Rum</h2>
                <div className='price'>15$/L</div>
                <img className='alcohol_img' src={Rum} />
                <div className='description'>This rum originates from the island of Negros in the Philippines where it is made from local molasses, renowned for its sweetness and richness. For those who do not know, if the Philippines is today one of the 10 largest sugarcane producing countries in the world, rum production only began 50 years ago.</div>
                <select id="quantity">
                    <option value="5L">5 Liters : 75$</option>       
                    <option value="20L">20 Liters : 300$</option>
                    <option value="50L">50 Liters : 750$</option>
                    <option value="1Barrel">1 Barrel : 2370$</option>
                </select>
                <button className="button_choice">Valid your choice.</button>
            </div>
        </div>
    )
}

export default Alcohol
