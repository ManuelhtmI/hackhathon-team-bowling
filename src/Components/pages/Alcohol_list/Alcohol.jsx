import React, {useEffect, useState} from 'react'
import Vodka from './vodka2.jpg'
import Whiskey from './whiskey.jpg'
import Rum from './rum2.jpg'
import './Alcohol.css'
import axios from "axios";

function Alcohols() {

    const [getApi, setApi] = useState([]);
    const [isLoadingApi, setLoadingApi] = useState(true);
    const [vodkaValue, setVodkaValue] = useState('');
    const [whiskeyValue, setWhiskeyValue] = useState('');
    const [rumValue, setRumValue] = useState('');
    const [vodkaState, setVodkaState] = useState([]);
    const [whiskeyState, setWhiskeyState] = useState([]);
    const [rumState, setRumState] = useState([]);
    const [finalValue, setFinalValue] = useState("")
    const [finalState, setFinaleState] = useState("")

    function vodkaValues (event){
        const value = event.target.value;
        setVodkaValue(value)
    }

    useEffect(() => {
        localStorage.setItem("vodkaValue", vodkaValue)
    }, [vodkaValue])

    function vodkaStates (event){
        const value = event.target.value;
        setVodkaState(value)
    }

    useEffect(() => {
        localStorage.setItem("vodkaState", vodkaState)
    }, [vodkaState])

    function whiskeyValues (event){
        const value = event.target.value;
        setWhiskeyValue(value)
    }

    useEffect(() => {
        localStorage.setItem("whiskeyValue", whiskeyValue)
    }, [whiskeyValue])

    function whiskeyStates (event){
        const value = event.target.value;
        setWhiskeyState(value)
    }

    useEffect(() => {
        localStorage.setItem("whiskeyState", whiskeyState)
    }, [whiskeyState])

    function rumValues (event){
        const value = event.target.value;
        setRumValue(value)
    }

    useEffect(() => {
        localStorage.setItem("rumValue", rumValue)
    }, [rumValue])

    function rumStates (event){
        const value = event.target.value;
        setRumState(value)
    }

    useEffect(() => {
        localStorage.setItem("rumState", rumState)
    }, [rumState])

    useEffect(()=>{
        setFinalValue(vodkaValue)
    }, [vodkaValue])
    useEffect(()=>{
        setFinaleState(vodkaState)
    }, [vodkaState])

    useEffect(()=>{
        setFinalValue(whiskeyValue)
    }, [whiskeyValue])
    useEffect(()=>{
        setFinaleState(whiskeyState)
    }, [whiskeyState])

    useEffect(()=>{
        setFinalValue(rumValue)
    }, [rumValue])
    useEffect(()=>{
        setFinaleState(rumState)
    }, [rumState])

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
                <h1 className='alcohol_title'>Alcohol</h1>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Vodka</h2>
                <div className='price'>25$/L</div>
                <img className='alcohol_img' src={Vodka} />
                <div className='description'>Expressed in each vodka bottle is the essence of the finest ingredients from France; soft winter wheat from in and around Picardy plus pure spring water from Gensac in the Cognac region, nurtured and captured from field to bottle in an exclusive process designed and controlled by the extraordinary skills and commitment of our Cellar Master François Thibault.</div>
                <div className='select'>
                    <select id="quantity" onChange={vodkaValues}>
                        <option value="5 Liters : 125$">5 Liters : 125$</option>       
                        <option value="20 Liters : 500$">20 Liters : 500$</option>
                        <option value="50 Liters : 1250$">50 Liters : 1250$</option>
                        <option value="1 Barrel : 3950$">1 Barrel : 3950$</option>
                    </select>
                    <select className="state" onChange={vodkaStates}>
                    {getApi[0].map((city) => (
                        <option value={city.id} >
                             {city.state}
                        </option>
                        ))}
                    </select>
                </div>
                <button className="button_choice" >Valid your choice.</button>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Whiskey</h2>
                <div className='price'>20$/L</div>
                <img className='alcohol_img' src={Whiskey} />
                <div className='description'>Though Kentucky bourbon produced principally from maize is the most emblematic American whiskey, in the 18th century, its ancestor, the Monongahela, was distilled in Pennsylvania exclusively from rye. Rye whiskey is still produced in micro-distilleries established throughout the area, from California to New York.</div>
                <div className="select">
                    <select className="quantity" onChange={whiskeyValues}>
                        <option value="5 Liters : 100$">5 Liters : 100$</option>       
                        <option value="20 Liters : 400$">20 Liters : 400$</option>
                        <option value="50 Liters : 1000$">50 Liters : 1000$</option>
                        <option value="1 Barrel : 3160$">1 Barrel : 3160$</option>
                    </select>
                    <select className="state" onChange={whiskeyStates}>
                    {getApi[0].map((city) => (
                        <option value={city.id}>
                             {city.state}
                        </option>
                        ))}
                    </select>
                </div>
                <button className="button_choice" >Valid your choice.</button>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Rum</h2>
                <div className='price'>15$/L</div>
                <img className='alcohol_img' src={Rum} />
                <div className='description'>This rum originates from the island of Negros in the Philippines where it is made from local molasses, renowned for its sweetness and richness. For those who do not know, if the Philippines is today one of the 10 largest sugarcane producing countries in the world, rum production only began 50 years ago.</div>
            <div className='select' onChange={rumValues}>
                <select id="quantity">
                    <option value="5 Liters : 75$">5 Liters : 75$</option>       
                    <option value="20 Liters : 300$">20 Liters : 300$</option>
                    <option value="50 Liters : 750$">50 Liters : 750$</option>
                    <option value="1 Barrel : 2370$">1 Barrel : 2370$</option>
                </select>
                <select className="state" onChange={rumStates}>
                    {getApi[0].map((city) => (
                        <option value={city.id}>
                            {city.state}
                        </option>
                    ))}
                </select>
            </div>
                <button className="button_choice" >Valid your choice.</button>
            </div>
        </div>
    )
}

export default Alcohols
