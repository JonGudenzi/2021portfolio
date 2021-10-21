import React from "react";
import WorkData from '../WorkData/WorkData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  Card, CardMedia, Button, CardActions, Typography, CardContent } from "@material-ui/core";
import githubIcon from '../../assets/img/GitHub-Mark-120px-plus.png';

import './Work.css';
// import { Container } from "react-bootstrap";

function Work() {



    return (
        <div>
            <div className="work cardDiv" container justify="center">

                <h1 className="col-12 text-center">Work</h1>


               

                {WorkData.map((data, index) => {
                    return (

    
                        <Card className="card" key={index}>

                            <CardMedia
                                component="img"
                                image={data.image}
                                alt={data.image}
                                height="220"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="p" component="div">
                                    {data.desc}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="large" href={data.app}>Application</Button>
                                <link 
                                rel={githubIcon}
                                type="image/png"
                                src="../../assets/img/GitHub-Mark-120px-plus.png"
                                 href={data.github} />
                            </CardActions>


                        </Card>
                       
                        
                    )
                })}


            </div>
        </div>
    )
}

export default Work;