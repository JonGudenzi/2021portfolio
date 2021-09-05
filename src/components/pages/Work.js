import React from "react";
import WorkData from './WorkData';
import bg from "../../assets/img/bg2.jpg";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent } from "@material-ui/core";

function Work() {

    return (
        <div className="img-responsive" style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 'auto',
            height: 'auto'
        }}>
            <div>
                <h1 className="col-12  text-center">Work</h1>
            </div>
            <Grid container>
                <Grid item
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        alignSelf: "center"
                    }}>

                    {WorkData.map((data, index) => {
                        return (
                            <Card key={index} className="col-3 m-4"
                                style={{
                                    backgroundImage: "linear-gradient(rgb(74, 101, 165)40%,rgb(62, 114, 117))",
                                    backgroundSize: "cover",
                                    color: "white",
                                    padding: "20px"
                                }} >

                                <CardContent
                                    style={{
                                        display: 'flex',
                                        flexWrap: "wrap",
                                        justifyContent: 'center'
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
                                </CardContent>
                            </Card>
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    )
}

export default Work;