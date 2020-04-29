import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import M from  'materialize-css/dist/js/materialize.min.js';
import './materialize.min.css';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    let sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {draggable: true});
  }

  render(){
      return (
      <Router>
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project/:id" component={Project} />
        <Footer />
      </Router>
    );
  }
}

export default App;
