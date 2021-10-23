import React, { useState } from "react";
import WorkData from '../WorkData/WorkData';
import {  Card, CardMedia, Button, CardActions,  CardContent } from "@material-ui/core";
import 'font-awesome/css/font-awesome.min.css';
// import ReactCardFlip from 'react-card-flip';
import './Work.css';


function Work() {

    return (
        <div>
            <div className="work cardDiv" justify="center">

                <h1 className="col-12 text-center">Work</h1>

                {WorkData.map((data, index) => {

                    return (

                        <Card className="card" key={index}>

                            <CardMedia  className="img"
                                component="img"
                                image={data.image}
                                alt={data.image}
                                height="230"
                            />

                            <CardContent className="content">
                                {/* <Typography  gutterBottom variant="body1">
                                    {data.desc}
                                </Typography> */}
                            

                            <CardActions>
                            <Button className="githubIcon" href={data.app}>
                                
                            <i className="fa fa-desktop" style={{fontSize:40}}></i> <p className="buttonName"> Application </p>
                            </Button>
                            </CardActions>

                            <CardActions>
                            <Button className="githubIcon" href={data.github}>
                            <i className="fa fa-github" style={{fontSize:48}}></i> <p className="buttonName"> Github </p>
                            </Button>
                            
                            </CardActions>

                            <CardActions>
                            <Button>
                            <i className="fa fa-book" style={{fontSize:48}}></i> <p className="buttonName"> Description </p>
                            </Button>

                            
                            
                            </CardActions>
                            </CardContent>

                            


                        </Card>
                       
                        
                    )
                })}


            </div>
        </div>
    )
}

export default Work;