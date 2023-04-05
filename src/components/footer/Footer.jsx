import "./footer.scss";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <img src="assets/wave2.png" alt="" style={{width: '6000px'}}></img>
      <div className="f-content">
        <span>This Website is made by Aditi Ray</span>
        <p>© March 2023</p>
        <div className="f-icons">
        <a href="https://www.linkedin.com/in/thisisaditi/" target="_blank"><Linkedin color="white" size="2rem"/></a>
        <a href="https://github.com/iamaditiray" target="_blank"><Github color="white" size="2rem"/></a>
        <a href="https://www.facebook.com/aditiray2001/" target="_blank"><Facebook color="white" size="2rem"/></a>
        <a href="https://www.instagram.com/amour_immacule/" target="_blank"><Insta color="white" size="2rem"/></a>
        </div>
      </div>
    </div>
  )
}
