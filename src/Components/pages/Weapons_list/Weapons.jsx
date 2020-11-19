import React from 'react'
import Model19 from './model19.jpeg'
import Thompson from './thompson.jpeg'
import Remington from './remington.jpg'
import '../Alcohol_list/Alcohol.css'

function Weapons() {
    return (
        <div className="alcohol_list">
            <div className='al_title'>
                <h1 className='alcohol_title'>Weapons</h1>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Thompson 1920</h2>
                <div className='price'>500$/P</div>
                <img className='alcohol_img' src={Thompson} />
                <div className='description'>The Thompson 1920 could fire off 850+ rounds per minute and reach upto 160 feet in range. The gun sported a 50-round drum magazine, with .45 ACP catridges and weighed just under 11 pounds.</div>
                <select id="quantity">
                    <option value="1P">1 Piece : 500$</option>       
                    <option value="5P">5 Pieces : 2500$</option>
                    <option value="10P">10 Pieces : 5000$</option>
                    <option value="20P">20 Pieces : 10000$</option>
                </select>
                <button className="button_choice">Valid your choice.</button>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Model 19 S&W</h2>
                <div className='price'>250$/P</div>
                <img className='alcohol_img' src={Model19} />
                <div className='description'>The Smith & Wesson Model Model 19 is a revolver produced by Smith & Wesson that was introduced on its K-frame. The Model 19 is chambered for .357 Magnum. The K-frame is somewhat smaller and lighter than the original N-frame .357, usually known as the Smith & Wesson Model 27</div>
                <select id="quantity">
                    <option value="1P">1 Piece : 250$</option>       
                    <option value="5P">5 Pieces : 1250$</option>
                    <option value="10P">10 Pieces : 2500$</option>
                    <option value="20P">20 Pieces : 5000$</option>
                </select>
                <button className="button_choice">Valid your choice.</button>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Remington 870</h2>
                <div className='price'>400$/P</div>
                <img className='alcohol_img' src={Remington} />
                <div className='description'>This 12 gauge, 7 pound monster packed some punch, and when you think a shotgun could reach a target 150 feet away this made the Remington a lethal and powerful weapon. It is widely used by the public for sport shooting, hunting, and self-defense and used by law enforcement and military organizations worldwide. </div>
                <select id="quantity">
                    <option value="1P">1 Piece : 400$</option>       
                    <option value="5P">5 Pieces : 2000$</option>
                    <option value="10P">10 Pieces : 4000$</option>
                    <option value="20P">20 Pieces : 8000$</option>
                </select>
                <button className="button_choice">Valid your choice.</button>
            </div>
        </div>
    )
}

export default Weapons
