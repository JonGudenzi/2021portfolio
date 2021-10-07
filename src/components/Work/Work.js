import React from "react";
import WorkData from '../WorkData/WorkData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "@material-ui/core";
import './Work.css';

function Work() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: true,
        className: 'slides',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
            },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1 
        }
    }]
      };

    return (
<div>
        <div className="work" container justify = "center">
            
                <h1 className="col-12 text-center">Work</h1>
            
            <Slider {...settings}>

                    {WorkData.map((data, index) => {
                        return (
                            
                            <Card key={index} className="col-12 m-4">

                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: "wrap",
                                        justifyContent: "space-between",
                                        
                                        
                                    }}>
                                    <div className="row">
                                        <img className="col-12 mb-3"
                                            src={data.image}
                                            alt={data.title}
                                        />
                                    </div>
                                    <p
                                        style={{
                                            padding: "8px",
                                            border: "2px black solid",
                                            textAlign: "center",
                                            display: 'flex',
                                            flexWrap: "wrap"
                                        }}>
                                        {data.desc}
                                    </p>

                                    <div style={{
                                        border: "2px black solid",
                                        textAlign: "center",
                                        display: "inline-block"
                                    }}>

                                        <a href={data.app}
                                            target={data.app}>
                                            <button className="title col-12"
                                                style={{
                                                    backgroundColor: "black",
                                                    color: "white",


                                                }}>
                                                <h3>{data.title}</h3>
                                                <p>{data.language}</p>
                                            </button>
                                        </a>

                                        <a href={data.github}
                                            target={data.github}>
                                            <button className="githubLink col-12"
                                                style={{
                                                    backgroundColor: "black",
                                                    color: "white",

                                                }}>
                                                <h3>Github repo</h3>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                            
                        )
                    })}
                    
                    </Slider>
        </div>
        </div>
    )
}

export default Work;