import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './FetchOneCity.css';

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


function FetchOneCity() {
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
        {getApi[0].slice(27, 28).map((city) => (
          <div>
          <h1 className= "meetingTitle">{city.state}
            </h1>
            <div className="meetingPoint">
            <img className="meetingPointPicture" src={tab1[number].image} alt="MeetingPointPicture"></img>
            </div>
            <p className="paragraph">Follow with the most attention this informations about the delivery :</p>
            <h4>Delivery must take place at the following meeting point :</h4>
            <div className="divInformation">
              <h2 className="meetingPlaces">{city.adress}</h2>
              <h3 className="meetingPlaces">{city.date}</h3>
              <h2 className="meetingPlaces">{city.hour}</h2>
            </div>
            <p>We will provide your order :</p>
            <p> BOW Agents will be present to ensure the succes of the operation, they will keep an eye for you inside a <strong className="meetingPlaces">{city.transport}</strong> </p>
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
            
            
  <div class="pseudo-parallax-card-container flex flex-row">
        
        <div class="mock top left"></div>
        <div class="mock top right"></div>
        <div class="mock bottom left"></div>
        <div class="mock bottom right"></div>
       
        <div class="content-container flex">
            <div class="controls-container flex flex-row">
                <span class="control"></span>
                <span class="control"></span>
                <span class="control"></span>
            </div>
            
            <div class="message-container">
                <div class="message message-one"></div>
                <div class="message message-two"></div>
                <div class="message message-three"></div>
                <div class="instructions">
                    <h2 class="name">Parallax Card </h2>
                   
                </div>
            </div>
        </div>
    </div>
             {" "}
          
          </div>
        ))}
      </div>
    </div>
  );
}






export default FetchOneCity;
