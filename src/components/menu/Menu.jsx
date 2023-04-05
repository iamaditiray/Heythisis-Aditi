import "./menu.scss";
import { LinkedIn, GitHub, Facebook, Instagram} from "@material-ui/icons";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#aboutme">About Me</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#skills">Abilities I Possess</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#certifications">Credentials I Obtained</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#portfolio">My Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#works">My Work Experience</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#testimonials">What I Offer</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#contact">Wanna Connect?</a>
        </li>
      </ul>
      <div className="accounts">
            <ul>
              <li>
                
                    <a href="https://www.linkedin.com/in/thisisaditi/" target="_blank"><LinkedIn  className="icon"/></a>
              </li>
              <li>
                
                    <a href="https://github.com/iamaditiray" target="_blank"><GitHub  className="icon"/></a>
              </li>
              <li>
                
                    <a href="https://www.facebook.com/aditiray2001/" target="_blank"><Facebook  className="icon"/></a>
              </li>
              <li>
                
                    <a href="https://www.instagram.com/amour_immacule/" target="_blank"><Instagram  className="icon"/></a>
              </li>
            </ul>
          </div>
    </div>
  )
}
