import React, {useEffect, useState} from 'react'
import Model19 from './model19.jpeg'
import Thompson from './thompson.jpeg'
import Remington from './remington.jpg'
import '../Alcohol_list/Alcohol.css'
import axios from "axios";
import { Link } from 'react-router-dom'

function Weapons() {

    const [getApi, setApi] = useState([]);
    const [isLoadingApi, setLoadingApi] = useState(true);
    const [thompsonValue, setthompsonValue] = useState('');
    const [modelValue, setmodelValue] = useState('');
    const [remingtonValue, setremingtonValue] = useState('');
    const [thompsonState, setthompsonState] = useState([]);
    const [modelState, setmodelState] = useState([]);
    const [remingtonState, setremingtonState] = useState([]);
    const [finalValue, setFinalValue] = useState("")
    const [finalState, setFinaleState] = useState("")

    function thompsonValues (event){
        const value = event.target.value;
        setthompsonValue(value)
    }

    useEffect(() => {
        localStorage.setItem("thompsonValue", thompsonValue)
    }, [thompsonValue])

    function thompsonStates (event){
        const value = event.target.value;
        setthompsonState(value)
    }

    useEffect(() => {
        localStorage.setItem("thompsonState", thompsonState)
    }, [thompsonState])

    function modelValues (event){
        const value = event.target.value;
        setmodelValue(value)
    }

    useEffect(() => {
        localStorage.setItem("modelValue", modelValue)
    }, [modelValue])

    function modelStates (event){
        const value = event.target.value;
        setmodelState(value)
    }

    useEffect(() => {
        localStorage.setItem("modelState", modelState)
    }, [modelState])

    function remingtonValues (event){
        const value = event.target.value;
        setremingtonValue(value)
    }

    useEffect(() => {
        localStorage.setItem("remingtonValue", remingtonValue)
    }, [remingtonValue])

    function remingtonStates (event){
        const value = event.target.value;
        setremingtonState(value)
    }

    useEffect(() => {
        localStorage.setItem("remingtonState", remingtonState)
    }, [remingtonState])

    useEffect(()=>{
        setFinalValue(thompsonValue)
    }, [thompsonValue])
    useEffect(()=>{
        setFinaleState(thompsonState)
    }, [thompsonState])
    
    useEffect(()=>{
        setFinalValue(modelValue)
    }, [modelValue])
    useEffect(()=>{
        setFinaleState(modelState)
    }, [modelState])

    useEffect(()=>{
        setFinalValue(remingtonValue)
    }, [remingtonValue])
    useEffect(()=>{
        setFinaleState(remingtonState)
    }, [remingtonState])

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
                <h1 className='alcohol_title'>Weapons</h1>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Thompson 1920</h2>
                <div className='price'>500$/P</div>
                <img className='alcohol_img' src={Thompson} />
                <div className='description'>The Thompson 1920 could fire off 850+ rounds per minute and reach upto 160 feet in range. The gun sported a 50-round drum magazine, with .45 ACP catridges and weighed just under 11 pounds.</div>
                <div className="select">
                    <select id="quantity" onChange={thompsonValues}>
                        <option value="1 Thompson 1920: 500$">1 Piece : 500$</option>       
                        <option value="5 Thompson 1920: 2500$">5 Pieces : 2500$</option>
                        <option value="10 Thompson 1920: 5000$">10 Pieces : 5000$</option>
                        <option value="20 Thompson 1920: 10000$">20 Pieces : 10000$</option>
                    </select>
                    <select className="state" onChange={thompsonStates}>
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
                <h2 className='title_al'>Model 19 S&W</h2>
                <div className='price'>250$/P</div>
                <img className='alcohol_img' src={Model19} />
                <div className='description'>The Smith & Wesson Model Model 19 is a revolver produced by Smith & Wesson that was introduced on its K-frame. The Model 19 is chambered for .357 Magnum. The K-frame is somewhat smaller and lighter than the original N-frame .357, usually known as the Smith & Wesson Model 27</div>
                <div className="select">
                    <select id="quantity" onChange={modelValues}>
                        <option value="1 Model 19 S&W: 250$">1 Piece : 250$</option>       
                        <option value="5 Model 19 S&W: 1250$">5 Pieces : 1250$</option>
                        <option value="10 Model 19 S&W: 2500$">10 Pieces : 2500$</option>
                        <option value="20 Model 19 S&W: 5000$">20 Pieces : 5000$</option>
                    </select>
                    <select className="state" onChange={modelStates}>
                            {getApi[0].map((city) => (
                                <option value={city.id}>
                                    {city.state}
                                </option>
                            ))}
                    </select>
                </div>
                <Link to="/Result"> <button className="button_choice">Valid your choice.</button></Link>
            </div>
            <div className='total_section'>
                <h2 className='title_al'>Remington 870</h2>
                <div className='price'>400$/P</div>
                <img className='alcohol_img' src={Remington} />
                <div className='description'>This 12 gauge, 7 pound monster packed some punch, and when you think a shotgun could reach a target 150 feet away this made the Remington a lethal and powerful weapon. It is widely used by the public for sport shooting, hunting, and self-defense and used by law enforcement and military organizations worldwide. </div>
                <div className="select">
                    <select id="quantity" onChange={remingtonValues}>
                        <option value="1 Remington 870: 400$">1 Piece : 400$</option>       
                        <option value="5 Remington 870: 2000$">5 Pieces : 2000$</option>
                        <option value="10 Remington 870: 4000$">10 Pieces : 4000$</option>
                        <option value="20 Remington 870: 8000$">20 Pieces : 8000$</option>
                    </select>
                    <select className="state" onChange={remingtonStates}>
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

export default Weapons
