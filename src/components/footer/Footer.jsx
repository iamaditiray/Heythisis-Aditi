import "./footer.scss";
import {LinkedIn, GitHub, Facebook, Instagram } from "@material-ui/icons";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <img src="assets/wave2.png" alt="" style={{width: '6000px'}}></img>
      <div className="f-content">
        <span>This Website is made by Aditi Ray</span>
        <p>© March 2023</p>
        <div className="f-icons">
        <a href="https://www.linkedin.com/in/thisisaditi/" target="_blank" rel="noreferrer"><LinkedIn color="white" size="2rem"/></a>
        <a href="https://github.com/iamaditiray" target="_blank" rel="noreferrer"><GitHub color="white" size="2rem"/></a>
        <a href="https://www.facebook.com/aditiray2001/" target="_blank" rel="noreferrer"><Facebook color="white" size="2rem"/></a>
        <a href="https://www.instagram.com/amour_immacule/" target="_blank" rel="noreferrer"><Instagram color="white" size="2rem"/></a>
        </div>
      </div>
    </div>
  )
}
