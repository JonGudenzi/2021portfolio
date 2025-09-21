import '../Home/Home.css';
import HomeAboutMe from "./HomeAboutMe";
import HomeSelfImage from "./HomeSelfImage";

function Home() {
  return (
    <div>
      <div className='home'>
        <div><HomeSelfImage /></div>
        <div><HomeAboutMe /></div>
      </div>
    </div>
  );
};

export default Home;


