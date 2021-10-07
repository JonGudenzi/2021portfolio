import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function Contact() {
  return (
    
    <div>
    <Container className="col-lg-6  text-center">
      <h1 className="col-12 text-center">Contact Me</h1>
        <ListGroup className="col-12 text-center">
          <ListGroup.Item>
            <i>Phone :</i>
            <a
              href="tel:704-957-1641"
              target="_blank"
              rel="noreferrer"
              alt="Phone: 704-957-1641"
              title="call"
            >
              <span> 704-957-1641</span>
            </a>
          </ListGroup.Item>

          <ListGroup.Item>
          <i>Email :</i>
            <a 
              href="mailto:jongudenzi@gmail.com"
              target="_blank"
              rel="noreferrer"
              alt="email"
              title="Click to launch email"
              className="contact-link"
            >
              <span>jongudenzi@gmail.com</span>
            </a>
          </ListGroup.Item>
          
          <ListGroup.Item>
            <i>Github : </i>
            <a 
              href="https://github.com/JonGudenzi"
              target="_blank"
              rel="noreferrer"
              alt="Github"
              title="Github"
              >
             <span>https://github.com/JonGudenzi</span>
            </a>
          </ListGroup.Item>

          <ListGroup.Item>
            <i>LinkedIn : </i>
            <a
              href="https://www.linkedin.com/in/jon-gudenzi/"
              target="_blank"
              rel="noreferrer"
              alt="linkedIn"
              title="LinkedIn"
            >
              <span>https://www.linkedin.com/in/jon-gudenzi/</span>
            </a>
          </ListGroup.Item>
        </ListGroup>
    </Container>
    </div>
    
  );
}

export default Contact;
