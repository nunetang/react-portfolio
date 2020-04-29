import React from "react";
import "./style.css";

function Contact(){
  return (
    <main>
      <div className="container main-view">
        <div className="row">
          <div className="col s12 flow-text">
            <h1>Contact</h1>
            <div className="contact-link">
              <img src="/assets/images/linkedin_512.png" alt="linkedin logo"></img>
              <a href="https://www.linkedin.com/in/nune-tangamyan-60887515b/" 
                alt="LinkedIn Profile" 
                target="_blank" 
                rel="noopener noreferrer">
                Nune Tangamyan
              </a>
            </div>
            <div className="contact-link">
              <img src="/assets/images/git.png" alt="github logo"></img>
              <a href="https://github.com/nunetang"
                alt="Github Profile"
                target="_blank" 
                rel="noopener noreferrer">
                nunetang
              </a>
              </div>
            <div className="contact-link">
              <i className="material-icons">email</i>
              <a href="mailto:nune.tangamyan@gmail.com">nune.tangamyan@gmail.com</a>
            </div>
            <div className="contact-link">
            <i className="material-icons">phone</i>
              <a href="tel:425-922-3476">425-922-3476</a>
            </div>
            <div className="contact-link">
              <i className="material-icons">file_download</i>
              <a href="/assets/docs/Nune-Tangamyan.pdf" alt="Resume" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;