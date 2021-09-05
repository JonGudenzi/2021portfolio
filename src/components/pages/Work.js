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
            <Grid container >
                <Grid className="col-12"  item style={{display: "flex", justifyContent:"space-around", flexWrap:"wrap"}}>
                    
            {WorkData.map((data, index) => {
                return (
                    <Card key={index} className="col-5 mb-5" style={{ backgroundImage: "linear-gradient(rgb(74, 101, 165)40%,rgb(62, 114, 117))", backgroundSize: "cover", color: "white", padding: "20px"}} >
                    
                    
                    <CardContent style={{display:'flex', flexWrap:"wrap", justifyContent:'center'}}>
                        
                                        <img
                                            className="col-8 "
                                            src={data.image}
                                            alt={data.title}
                                            // style={{ alignSelf: 'center' }}
                                        />
                                        <p>{data.desc}</p>
                                        <a href={data.app}
                                            target={data.app}>
                                            <button className="title col-8 mb-3">
                                                <h3>{data.title}</h3>
                                                <p>{data.language}</p>
                                            </button>
                                        </a>
                                        <button className="githubLink col-6"
                                            style={{ alignSelf: 'center' }}>
                                            <a href={data.github}
                                                target={data.github}>
                                                <p className="githubText">Github Repo</p>
                                            </a>
                                        </button>
                                   
                                
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