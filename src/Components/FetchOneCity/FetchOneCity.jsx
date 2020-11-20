import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './FetchOneCity.css';
import { Link } from 'react-router-dom'


import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/images6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/images8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';
import image15 from '../assets/image15.jpg';

import map from '../assets/maps.png';
import caisse from '../assets/caisse_bois.png';
import camion from '../assets/camion.png';


function FetchOneCity() {
  
  const value = localStorage.getItem('finalValue');
  const citychosen = parseInt(localStorage.getItem('finalState'));
  console.log(citychosen)
  
  const [getApi, setApi] = useState([]);
  const [isLoadingApi, setLoadingApi] = useState(true);
  let number = Math.floor((Math.random()*14)+1);
  
  
  
  const tab1 = [
    {image : image1},
    {image : image2},
    {image : image3},
    {image : image4},
      {image : image5},
      {image : image6},
      {image : image7},
      {image : image8},
      {image : image9},
      {image : image10},
      {image : image11},
      {image : image12},
      {image : image13},
      {image : image14},
      {image : image15}
      
    ]
    
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
        <div className="container">
          <div>
          {getApi[0].filter((city)=> city.id == citychosen).map((city) => (
              <div>
              <h1 className= "meetingTitle">{city.state}
                </h1>
                <div className="meetingPoint">
                <img className="meetingPointPicture" src={tab1[number].image} alt="MeetingPointPicture"></img>
                </div>
                <p className="paragraph">Follow with the most attention this informations about the delivery :</p>
                <h4>Delivery must take place at the following meeting point :</h4>
                <div className="divInformation">
                  <div className="divInformationText">
                    <h2 className="meetingPlaces important">{city.adress}</h2>
                    <h3 className="meetingPlaces important">{city.date}</h3>
                    <h2 className="meetingPlaces important">{city.hour}</h2>
                  </div>
                  <div className="divInformationImg">
                    <img className="Icon" src={map} alt="icon map"></img>
                  </div>
                </div>
                <h4>We will provide your order :</h4>
                <h4><strong className="important">{value}</strong></h4>
                <div className="divInformation">
                    <img className="Icon_box" src={caisse} alt="icon box"></img>
                </div>
                <h4> BOW Agents will be present to ensure the succes of the operation, they will keep an eye for you inside a <strong className="i"portant>{city.transport}</strong> </h4>
                <div className="divInformation">
                    <img className="Icon_truck" src={camion} alt="icon truck"></img>
                </div>
                <p>In <em>{city.state}</em> we also have :</p>
                
                <section>
            <table className="containerList">
              <div className="containerLineOption">
                  <li>Weapons :</li>
                  <li>Alcohol :</li>
                  <li>Drugs :</li>
              </div>
                <div className="containerLineResult">
                  <li>{city.weapons}</li>
                  <li>{city.alcohol}</li>
                  <li>{city.drugs}</li>
                </div>
            </table>
    
         
         
            </section>
            
            

          
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default FetchOneCity;