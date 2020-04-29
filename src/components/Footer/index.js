import React from "react";


function Footer(){
  return(
    <footer className="page-footer">
      <div className="container">
        <div className="row links">
          <div>
            <a href="https://www.linkedin.com/in/nune-tangamyan-60887515b/" target="_blank" rel="noopener noreferrer" alt="linkedin: nunetang">
              <img src="/assets/images/linkedin_512.png" alt="linkedin logo"></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/nunetang" target="_blank" rel="noopener noreferrer" alt="github: nunetang">
              <img src="/assets/images/git.png" alt="github logo"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          © 2020
        </div>
      </div>
    </footer>
  );
};

export default Footer;