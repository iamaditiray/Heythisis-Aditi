import "./education.scss";
import { VerticalTimeline,
        VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@material-ui/icons";

export default function Education() {
  return (
    <div className="education" id="education"> 
    <h1>My Education Background</h1>
    {" "}
      <VerticalTimeline lineColor="#000000">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2013 - 2018" contentStyle={{ background: '#ffffff', color: '#000000', padding: '10px' }}
        iconStyle={{background: "#000000", color: "#ffffff", margin_top:"10px"}}
        icon={<School/>}
        style={{ marginBottom: '10px' }} >
          <h3 className="vertical-timeline-element-title">
            Secondary Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Holy Child Institute Girls' Higher Secondary School
          </h4>
          <p><b>Timeline : </b>2016-2018</p>
          <p>Passed with 94.3%</p>      
          <button className="btn-primary"><a href="http://hcikolkata.org/home.php" target="_blank">Take a Look</a></button>   
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2018 - 2020" contentStyle={{ background: '#ffffff', color: '#000', padding: '10px' }}
        iconStyle={{background: "#000000", color: "#ffffff", margin_top:"10px"}}
        icon={<School/>}
        style={{ marginBottom: '5px' }} >
          <h3 className="vertical-timeline-element-title">
            Higher Secondary Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Holy Child Institute Girls' Higher Secondary School
          </h4>
          <p><b>Timeline : </b>2018-2020</p>
          <p>Passed with 93%</p>      
          <button className="btn-primary"><a href="http://hcikolkata.org/home.php" target="_blank">Take a Look</a></button>   
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2020-2024" contentStyle={{ background: '#fff', color: '#000', padding: '10px' }}
        iconStyle={{background: "#000000", color: "#ffffff", margin_top:"10px"}}
        icon={<School/>}
        style={{ marginBottom: '5px' }} >
          <h3 className="vertical-timeline-element-title">
            B.Tech in Computer Science and Techology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           University of Engineering and Management, Kolkata
          </h4>
          <p><b>Timeline : </b>2020-2024</p>
          <p>Currently Pursuing</p>      
          <button className="btn-primary"><a href="https://uem.edu.in/uem-kolkata/" target="_blank">Take a Look</a></button>   
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}


