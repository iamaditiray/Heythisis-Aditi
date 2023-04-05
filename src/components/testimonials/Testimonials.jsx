import "./testimonials.scss"

export default function Testimonials() {

  const data = [
    {
      id: "1",
      name: "Graphic Design",
      title:"Posters, Banners, Flyers, Logos etc.",
      desc:"As someone who loves graphic design, I enjoy the endless creative possibilities that come with it. From typography to color schemes, every design element can be carefully crafted to communicate a message or evoke an emotion. It's exhilarating to see my ideas come to life and have a visual impact on others.",
      img: "assets/test2.gif",
      icon:"",
    },
    {
      id: "2",
      name: "Web Developement",
      title: "Frontend, Backend, FullStack, No-Code etc.",
      desc:"As a web developer, what excites me is the constant innovation and evolution of the technology. Being able to create and design a website that engages users and solves real-world problems is incredibly rewarding. The potential to make a positive impact through my work drives my passion for web development.",
      img: "assets/test1.gif",
      icon:"",
      featured: true,
    },
    {
      id: "3",
      name: "UI-UX Design",
      title: "Figma, Canva, Branding, Marketing etc.",
      desc:"As a UI-UX designer, I adore the ability to create engaging and intuitive digital experiences that truly enhance the user's journey. I love the challenge of combining form and function to design interfaces that are both visually stunning and highly functional, ultimately improving the user's overall experience.",
      img: "assets/test3.gif",
      icon:"",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>My Awesome Services...</h1>
      <div className="container">
        {data.map(p=>(
        <div className={p.featured? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" className="left"/>
            <img src={p.img} className="user"/>
            <img src="assets/youtube.png" className="right"/>
          </div>
          <div className="center">
          {p.desc}
          </div>
          <div className="bottom">
              <h3>{p.name}</h3>
              <h5>{p.title}</h5>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
