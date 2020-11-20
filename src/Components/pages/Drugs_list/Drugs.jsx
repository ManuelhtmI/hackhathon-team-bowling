import React, {useEffect, useState} from 'react'
import '../Alcohol_list/Alcohol.css'
import Coc from './coc.jpg'
import Hero from './hero.jpg'
import Opi from './opi.jpg'
import axios from "axios";
import { Link } from 'react-router-dom'

function Drugs() {

    const [getApi, setApi] = useState([]);
    const [isLoadingApi, setLoadingApi] = useState(true);
    const [cocoValue, setcocoValue] = useState('');
    const [opiumValue, setopiumValue] = useState('');
    const [heroValue, setheroValue] = useState('');
    const [cocoState, setcocoState] = useState([]);
    const [opiumState, setopiumState] = useState([]);
    const [heroState, setheroState] = useState([]);
    const [finalValue, setFinalValue] = useState("")
    const [finalState, setFinaleState] = useState("")

    function cocoValues (event){
        const value = event.target.value;
        setcocoValue(value)
    }

    useEffect(() => {
        localStorage.setItem("cocoValue", cocoValue)
    }, [cocoValue])

    function cocoStates (event){
        const value = event.target.value;
        setcocoState(value)
    }

    useEffect(() => {
        localStorage.setItem("cocoState", cocoState)
    }, [cocoState])

    function opiumValues (event){
        const value = event.target.value;
        setopiumValue(value)
    }

    useEffect(() => {
        localStorage.setItem("opiumValue", opiumValue)
    }, [opiumValue])

    function opiumStates (event){
        const value = event.target.value;
        setopiumState(value)
    }

    useEffect(() => {
        localStorage.setItem("opiumState", opiumState)
    }, [opiumState])

    function heroValues (event){
        const value = event.target.value;
        setheroValue(value)
    }

    useEffect(() => {
        localStorage.setItem("heroValue", heroValue)
    }, [heroValue])

    function heroStates (event){
        const value = event.target.value;
        setheroState(value)
    }

    useEffect(() => {
        localStorage.setItem("heroState", heroState)
    }, [heroState])

    useEffect(()=>{
        setFinalValue(cocoValue)
    }, [cocoValue])
    useEffect(()=>{
        setFinaleState(cocoState)
    }, [cocoState])

    useEffect(()=>{
        setFinalValue(opiumValue)
    }, [opiumValue])
    useEffect(()=>{
        setFinaleState(opiumState)
    }, [opiumState])

    useEffect(()=>{
        setFinalValue(heroValue)
    }, [heroValue])
    useEffect(()=>{
        setFinaleState(heroState)
    }, [heroState])

    localStorage.setItem("finalValue", finalValue)
    localStorage.setItem("finalState", finalState)

    useEffect(() => {
        axios
          .get("https://united-states-cities.herokuapp.com/cities/")
          .then((response) => {
            setApi(response.data);
            setLoadingApi(false);
          });
      }, []);
      if (isLoadingApi) {
        return (
          <div className="loadingPage">
            <p>Loading..</p>
          </div>
        );
      }

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
                <div className='select'>
                    <select id="quantity" onChange={cocoValues}>
                        <option value="5 Grams of cocaine: 225$">5 Grams : 225$</option>       
                        <option value="20 Grams of cocaine: 900$">20 Grams : 900$</option>
                        <option value="100 Grams of cocaine: 4500$">100 Grams : 4500$</option>
                        <option value="1 Kilogram of cocaine: 45000$">1 Kilogram : 45000$</option>
                    </select>
                    <select className="state" onChange={cocoStates}>
                        {getApi[0].map((city) => (
                            <option value={city.id}>
                                {city.state}
                            </option>
                        ))}
                    </select>
                </div>
                <Link to="/Result"><button className="button_choice">Valid your choice.</button></Link>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Opium</h2>
                <div className='price'>40$/G</div>
                <img className='alcohol_img' src={Opi} />
                <div className='description'>opiumValue is a depressant drug, which means it slows down the messages traveling between your brain and body. The opiumValue poppy from which opiumValue is derived is one of the earliest plants of which there is recorded medicinal use.1 Evidence of opiumValue cultivation by the Sumerian people dates to 3400BCE.</div>
                <div className='select'>
                    <select id="quantity" onChange={opiumValues}>
                        <option value="5 Grams of opium: 200$">5 Grams : 200$</option>       
                        <option value="20 Grams of opium: 800$">20 Grams : 800$</option>
                        <option value="100 Grams of opium: 4000$">100 Grams : 4000$</option>
                        <option value="1 Kilogram of opium: 40000$">1 Kilogram : 40000$</option>
                    </select>
                    <select className="state" onChange={opiumStates}>
                        {getApi[0].map((city) => (
                            <option value={city.id}>
                                {city.state}
                            </option>
                        ))}
                    </select>
                </div>
                <Link to="/Result"><button className="button_choice">Valid your choice.</button></Link>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Heroin</h2>
                <div className='price'>35$/G</div>
                <img className='alcohol_img' src={Hero} />
                <div className='description'>Heroin is part of a group of drugs known as opioids. Opioids interact with opioid receptors in the brain and elicit a range of responses within the body; from feelings of pain relief, to relaxation, pleasure and contentment.Heroin is usually injected into a vein, but it’s also smoked, and added to cigarettes and cannabis.</div>
                <div className='select'>
                    <select id="quantity" onChange={heroValues}>
                        <option value="5 Grams of heroin: 175$">5 Grams : 175$</option>       
                        <option value="20 Grams of heroin: 700$">20 Grams : 700$</option>
                        <option value="100 Grams of heroin: 3500$">100 Grams : 3500$</option>
                        <option value="1 Kilogram of heroin: 35000$">1 Kilogram : 35000$</option>
                    </select>
                    <select className="state" onChange={heroStates}>
                        {getApi[0].map((city) => (
                            <option value={city.id}>
                                {city.state}
                            </option>
                        ))}
                    </select>
                </div>
                <Link to="/Result"><button className="button_choice">Valid your choice.</button></Link>
            </div>
        </div>
    )
}

export default Drugs
