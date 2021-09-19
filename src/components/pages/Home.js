import React from "react";
import selfImg from "../../assets/img/portfolio_picture.jpg";
import bg from "../../assets/img/bg2.jpg";

function Home() {
  return (

    <div
    style={{ backgroundImage: `url(${bg})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    width: '100vw', 
    height: '100vh' }}>
      
      <h1 className="col-12 text-center">About Me</h1>
      <div className="aboutFlexParent">
        <img
          src={selfImg}
          alt="Jon Gudenzi"
          className="selfImg"
        />
      
      <p className="col-5 text-center aboutMe">
          I am an aspiring developer who currently works a full time job in inventory and logistics. I have been with my current employer for 15 years and have peaked at performance and growth within the organization. I've chosen a new career path in computer programming with a focus on web development because I enjoy the challenging and creative outlet.
      </p>
    
        
      </div>
    </div>
  );
}

export default Home;
