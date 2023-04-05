import { useState } from "react";
import "./certifications.scss"

export default function Certifications() {
    const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "assets/coursera-logo.png",
      title: "IBM Cybersecurity Analyst",
      desc:"https://www.coursera.org/account/accomplishments/professional-cert/3NM3WZTS9KPL",
      img: "assets/c1.jpg",
    },
    {
      id: "2",
      icon: "assets/coursera-logo.png",
      title: "Programming With Javascript",
      desc:"https://www.coursera.org/account/accomplishments/verify/32HWWXVLF47W",
      img: "assets/c2.jpg",
    },
    {
      id:"3",
      icon:"assets/coursera-logo.png",
      title: "Version Control",
      desc: "https://www.coursera.org/account/accomplishments/verify/GZ5UPGPHT5KZ",
      img : "assets/c3.jpg",
    },
    {
      id:"4",
      icon:"assets/coursera-logo.png",
      title: "Java Programming: Problem Solving with Software",
      desc: "https://www.coursera.org/account/accomplishments/verify/M6WVUUME4R7K",
      img : "assets/c4.jpg",
    },
    {
      id:"5",
      icon:"assets/coursera-logo.png",
      title: "Create a No-Code Responsive Website with Webflow",
      desc: "https://www.coursera.org/account/accomplishments/verify/RVB2DUD2EDAS",
      img : "assets/c5.jpg",
    },
    {
      id:"6",
      icon:"assets/coursera-logo.png",
      title: "Build an App with Adalo",
      desc: "https://www.coursera.org/account/accomplishments/verify/TJHZ3ZZZ5UT9",
      img : "assets/c6.jpg",
    },
    {
      id:"7",
      icon:"assets/coursera-logo.png",
      title: "Introduction to Front-End Development",
      desc: "https://www.coursera.org/account/accomplishments/verify/V38S8DJHLQD2",
      img : "assets/c7.jpg",
    },
    {
      id:"8",
      icon:"assets/internshala.png",
      title: "Core-Java",
      desc: "https://trainings.internshala.com/s/v/2570501/4d3bb9b2",
      img : "assets/c8.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 7) :
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0)
  }
  
  return (
    <div className="certifications" id="certifications">
      <div className="up">
      <h1>Credentials I Obtained</h1>
      </div>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imageContainer">
                    <img src={d.icon}/>
                  </div>
                  <h2>{d.title}</h2>
                 <p><a href={d.desc} target="_blank">Credentials</a></p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} className={d.id === "1" ? "rotate" : ""}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" onClick={() => handleClick("right")}/>
    </div>
  )
}
