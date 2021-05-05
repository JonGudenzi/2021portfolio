import React from "react";
import WorkData from './WorkData';
import bg from "../../assets/img/bg2.jpg";

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
            <div className="row py-4 col-10 ">
                {WorkData.map((data, index) => {
                    return (
                        <div className=" col-6 mb-5 ">
                            <div className="card text-center h-100 ">
                                <div key={index} className="card">
                                    <img
                                        src={data.image}
                                        alt={data.title}
                                    />
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