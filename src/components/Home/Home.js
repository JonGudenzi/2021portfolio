import React from "react";
import './Home.css';
import HomeAboutMe from "./HomeAboutMe";
import HomeSelfImage from "./HomeSelfImage";
import bg from "../../assets/img/bg2.jpg";



function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <div className='home'>
        <div><HomeSelfImage /></div>
        <div><HomeAboutMe /></div>
      </div>
    </div>
  );
}

export default Home;
