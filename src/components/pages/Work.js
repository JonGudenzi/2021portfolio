import React from "react";
import WorkData from './WorkData';
import bg from "../../assets/img/bg2.jpg";

function Work() {

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
        }}>
            <div>
                <h1 className="col-12 text-center">Work</h1>
            </div>
            <div className="row my-row">
                {WorkData.map((data, index) => {
                    return (
                        <div className="flexParent col-6">
                            <div className="flexItems text-center">
                                <div key={index} className="workItem row-6">
                                    <img style={{ backgroundImage: `url${data.image}` }}></img>
                                    <p>{data.desc}</p>
                                    <a href={data.app}
                                        target={data.app}>
                                        <div className="title">
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
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Work;