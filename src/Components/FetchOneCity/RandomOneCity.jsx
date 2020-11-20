import { React, useEffect }from 'react';
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



function Random() {
    let number = Math.floor((Math.random()*14)+1);
    console.log(number)
    let images = ""
    
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
        images = document.querySelector(".meetingPointPicture")
    }, [])

    useEffect(() => {
        images.src = tab1[number].image
    }, [images])
   
    return (
        <div>
            <img className="Img_Place" src={image1}></img>
        </div>
    )
}

// export default Random
