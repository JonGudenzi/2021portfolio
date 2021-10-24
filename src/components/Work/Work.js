import React, { useState } from "react";
import WorkData from '../WorkData/WorkData';
import { Card, CardMedia, Button, CardActions, CardContent, Typography } from "@material-ui/core";
import 'font-awesome/css/font-awesome.min.css';
import ReactCardFlip from 'react-card-flip';
import './Work.css';


function Work() {

    const [isFlipped, setIsFlipped] = useState(false);

    const clickHandler = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div>
            <div className="work cardDiv" justify="center">

                <h1 className="col-12 text-center">Work</h1>

                {WorkData.map((data, index) => {

                    return (


                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            
                            <Card className="card" key={index}>
                            <h1>{data.title}</h1>

                            <CardMedia className="img"
                            component="img"
                            image={data.image}
                            alt={data.image}
                            height="230"
                            />

                            <h6>{data.language}</h6>

                            <CardContent className="content">



                            <CardActions>
                            <Button className="githubIcon" href={data.app}>

                            <i className="fa fa-desktop" style={{ fontSize: 40 }}></i> <p className="buttonName"> Application </p>
                            </Button>
                            </CardActions>

                            <CardActions>
                            <Button className="githubIcon" href={data.github}>
                            <i className="fa fa-github" style={{ fontSize: 48 }}></i> <p className="buttonName"> Github </p>
                            </Button>

                            </CardActions>

                            <CardActions>
                            <Button onClick={clickHandler}>
                            <i className="fa fa-book" style={{ fontSize: 48 }}></i> <p className="buttonName"> Description </p>
                            </Button>



                            </CardActions>

                            


                            </CardContent>




                            </Card>

                            <div className="work cardDiv" justify="center">

                            <Card className="card">

                            <h1>{data.title}</h1>

                            <Typography  gutterBottom variant="body1">
                        {data.desc}
                            </Typography>

                            <Button onClick={clickHandler}>
                            <i className="fa fa-chevron-left" style={{ fontSize: 48 }}></i>
                            </Button>

                            </Card>
                            </div>


                        </ReactCardFlip>


                    )
                })}


            </div>
        </div>
    )
}

export default Work;