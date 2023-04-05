import "./aboutme.scss";
import { School, CameraFront, Stars} from "@material-ui/icons";

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="heading">
      <h5>Get To Know</h5>
      <h2>About Me...</h2>
      </div>
      <div className="container">
        <div className="about_me">
          <img src="assets/mypicture.jpg" alt="My Pic" />
        </div>
        <div className="about_content">
          <div className="about_cards">          
           <a href="#personal" className="btn-primary"> <article className="about_card">
              <CameraFront className="about_icon" />
              <div className="text">
              <h5>Personal Details</h5>
              <small>A Happy Desktop  always eager to learn</small>
            </div>
            </article></a>
            <a href="#education" className="btn-primary"> <article className="about_card">
              <School className="about_icon" />
              <div className="text">
              <h5>Education</h5>
              <small>B.Tech, Computer Science and Technology</small>
              </div>
            </article></a>
           <a href="#skills" className="btn-primary"> <article className="about_card">
              <Stars className="about_icon"/>
              <div className="text">
              <h5>Skills</h5>
              <small>Development, Design, Problem Solving</small>
              </div>
            </article></a>
          </div>
          <p>
          I adept at collaborating with dynamic teams to build high quality websites and identify opportunities to enhance the user experience.<br></br> Need someone who will care about your success, communicate clearly, <br></br>and anticipate options that minimize unwanted surprises?
          <br></br><b>I want to be that person for you.</b>
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </div>
  );
}
