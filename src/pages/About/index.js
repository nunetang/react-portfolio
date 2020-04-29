import React from "react";
import "./style.css";

function About(){
  return (
    <main>
      <div className="container main-view">
        <div className="row">
          <div className="col s12">
            <h1>About Me</h1>
            <img className="headshot" src="assets/images/portfolio-about-me.jpg" alt="NT"></img>
            <p className="flow-text">
            Hello there! Thanks for reading my bio. I am a former QA Engineer and Math teacher with a Bachelor’s of Science degree, majored in Applied Mathematics and Computer Science, who is attending a full stack web development bootcamp at the University of Washington and am interested in shifting my career focus to software development. I have hard (HTML, CSS, JavaScript, jQuery, React.js, MySQL, MongoDB) and soft skills (communication, teamwork, adaptability, problem-solving). I love to challenge myself and I am doing so in UW's Coding Bootcamp. I am currently seeking a diverse professional home in which to collaborate on technologies that will enrich the lives of others. On my off time I enjoy yoga, going to the gym, traveling and seeing obscure bands at small venues. I am very excited to see where this Bootcamp takes me!
          </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;