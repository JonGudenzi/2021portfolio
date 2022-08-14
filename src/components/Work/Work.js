import React, { useState } from "react";
import WorkData from "../WorkData/WorkData";
import {
  CardMedia,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import "font-awesome/css/font-awesome.min.css";
import ReactCardFlip from "react-card-flip";
import "./Work.css";
import Card from "../UI/Card";

const Work = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const clickHandler = (e) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <h1 className="row justify-content-center">Work</h1>
      <div className="wrapper">
        {WorkData.map((data, id) => {
          return (
            <div key={id}>
              <div>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                  <Card>
                    <h3>{data.title}</h3>

                    <CardMedia
                      component="img"
                      image={data.image}
                      alt={data.image}
                      height="230"
                    />

                    <h6>{data.language}</h6>

                    <CardContent>
                      <CardActions>
                        <Button className="githubIcon" href={data.app}>
                          <i
                            className="fa fa-desktop"
                            style={{ fontSize: 40 }}
                          ></i>{" "}
                          <p className="buttonName"> Application </p>
                        </Button>
                      </CardActions>

                      <CardActions>
                        <Button className="githubIcon" href={data.github}>
                          <i
                            className="fa fa-github"
                            style={{ fontSize: 48 }}
                          ></i>{" "}
                          <p className="buttonName"> Github </p>
                        </Button>
                      </CardActions>

                      <CardActions>
                        <Button onClick={clickHandler}>
                          <i
                            className="fa fa-book"
                            style={{ fontSize: 48 }}
                          ></i>
                          <p className="buttonName"> Description </p>
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>

                  {/* Back of Card */}

                  <div justify="center">
                    <Card>
                      <h1>{data.title}</h1>
                      <Typography gutterBottom variant="body1">
                        {data.desc}
                      </Typography>
                      <Button onClick={clickHandler}>
                        <i
                          className="fa fa-chevron-left"
                          style={{ fontSize: 48 }}
                        ></i>
                      </Button>
                    </Card>
                  </div>
                </ReactCardFlip>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
