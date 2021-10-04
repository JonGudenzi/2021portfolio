import React from "react";
import selfImg from "../../assets/img/portfolio_picture.jpg";
import './HomeSelfImage.css';

const HomeSelfImage = () => {
  return (

    <div>
      <img
        src={selfImg}
        alt="Jon Gudenzi"
        className="selfImage"
      />
    </div>
  )

};

export default HomeSelfImage;