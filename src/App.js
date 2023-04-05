import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from "./components/skills/Skills";
import Certifications from "./components/certifications/Certifications";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Education from "./components/education/Education";
import "./app.scss";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Personal from "./components/personal/Personal";


function App() {

  const[menuOpen, setMenuOpen]=useState(false)
  
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Aboutme/>
        <Personal/>
        <Education/>
        <Skills/>
        <Certifications/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>  
        <Footer/>        
      </div>
      
      </div>

  );
}

export default App;
