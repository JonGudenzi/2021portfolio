import React from "react";
import WorkData from './WorkData';
import bg from "../../assets/img/bg2.jpg";
import Grid from "@material-ui/core/Grid";

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
                <h1 className="col-12 text-center">Work</h1>
            </div>
            <Grid container spacing={1} style={{display: "flex", justifyContent: "center"}} >
                {WorkData.map((data, index) => {
                    return (
                        <div className=" col-5 mb-5 " key={index}>
                            <div style={{ backgroundImage: "linear-gradient(rgb(74, 101, 165)40%,rgb(62, 114, 117))", backgroundSize: "cover", minHeight: "70vh",color: "white", padding: "20px"}}  className=" card text-center ">
                                
                                    <img
                                        className="col-10"
                                        src={data.image}
                                        alt={data.title}
                                        style={{alignSelf: 'center'}}
                                    />
                                    <p>{data.desc}</p>
                                    <a href={data.app}
                                        target={data.app}>
                                        <div className="title ">
                                            <h3>{data.title}</h3>
                                            <p>{data.language}</p>
                                        </div>
                                    </a>
                                    <div className="githubLink">
                                        <a href={data.github}
                                            target={data.github}>
                                            <p className="githubText">Github Repo</p>
                                        </a>
                                    </div>
                                
                            </div>
                        </div>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Work;