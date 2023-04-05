import { useState } from "react";
import "./works.scss"

export default function Works() {
   const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "2",
      icon: "assets/dlogo.png",
      title: "Graphic Designer",
      desc:"Worked as a Graphic Designing Intern In Dreams' Clues from June,2022 to August, 2022. It was a very skillful and conquering experience as I was introduced to the industry requirements and also privileged to work on several diligent team projects.",
      img: "assets/dcer.png"
    },
    {
      id: "1",
      icon: "assets/ctlogo.png",
      title: "Graphic Designer",
      desc:"Worked as a Graphic Designing Intern in Chamela Helpdia Charitable Trust from May, 2022 to June, 2022.I was honored and privileged to be selected as their intern and so glad for having the opportunity to work with their well organized team.",
      img: "assets/work1.png"
    },
    {
      id:"3",
      icon:"assets/2.png",
      title: "Freelance Designer",
      desc: "Working as a Freelance Web Designer as of now. Recently created a fully functional E-Commerce website for Papu's Creation. The website is based on No-Code Development with enhanced user experience and functionalitites like Whatsapp Redirection.",
      img : "assets/website.png",
    },
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0)
  }
  
  return (
    <div className="works" id="works">
      <div className="up">
        <h1>My Work Experience</h1>
      </div>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
       
       {data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imageContainer">
                  <img src={d.icon}/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}
                </p>
                 
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
