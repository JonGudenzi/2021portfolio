import React from "react";
import bg from "../../assets/img/bg2.jpg";


function Contact(props) {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'
    }}>
      <h1 className="col-12 text-center">Contact Me</h1>
      <div className="aboutFlexParent">
        <div className="col-7 text-center aboutMe flexItems">
          <div class="row justify-content-center my-row">
            <div class="col-md-6 my-col">
              <h1>Phone</h1>
              <p class="phone">704-957-1641</p>
            </div>
            <div class="col-md-6 my-col email">
              <h1>Email</h1>
              <a href="mailto:jongudenzi@gmail.com">jongudenzi@gmail.com</a>
            </div>
            <div class="col-md-6 my-col linkedIn">
              <h1>LinkedIn</h1>
              <a href="https://www.linkedin.com/in/jon-gudenzi-8338041b6/"
                target="https://www.linkedin.com/in/jon-gudenzi-8338041b6/">Jon Gudenzi</a>
            </div>
            <div class="col-md-6 my-col github">
              <h1>GitHub</h1>
              <a href="https://github.com/JonGudenzi" target="https://github.com/JonGudenzi">JonGudenzi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
