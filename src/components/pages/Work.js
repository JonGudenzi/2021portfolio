// import React, { useState } from "react";
// // import "./Work.css";

// function Work(props) {

//     const { workData } = props
//     return (
//         <div>
//             <div className="row justify-content-around my-row">
//             <div className="col-md-3 my-col">
//                 <h1 id="work">Work</h1>
//                 </div>

//                 {workData.map((data, index) => {
//                     return (
//                         <div key={index} className="workItem col-md-4 my-col">

//                             <p>{data.desc}</p>
//                             <a href={data.github}
//                                 target={data.github}>
//                                 <div className="title">
//                                     <h3>{data.title}</h3>
//                                     <p>{data.language}</p>
//                                 </div>
//                             </a>
//                             <div className="githubLink">
//                                 <a href={data.github}
//                                     target={data.github}>
//                                     <p className="githubText">Github Repo</p>
//                                 </a>
//                             </div>

//                         </div>
//                     )
//                 })}
                
//                 </div> 
//         </div>
//     )
// }

// export default Work;