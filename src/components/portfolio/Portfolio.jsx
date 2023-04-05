import { useEffect, useState } from "react";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import "./portfolio.scss";
import { featuredPortfolio, 
        webpagesPortfolio, 
        graphicsPortfolio } from "../../data";


export default function Portfolio() {
  const[selected, setSelected] = useState("featured");
  const[data, setData] = useState([]);

  const list=[
    {
      id:"featured",
      title:"Featured",

    },
    {
      id:"webpages",
      title:"Web Pages",

    },
    {
      id:"graphics",
      title:"Graphic Designs",      

    }

  ];

  useEffect(() => {
    switch(selected){
      case "featured" :
        setData(featuredPortfolio);
        break;
      case "webpages" :
        setData(webpagesPortfolio);
        break;
      case "graphics" :
        setData(graphicsPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }

  },[selected]) 
  
  return (
    <div className='portfolio' id="portfolio">
      <h1>My Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist 
          title={item.title} 
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src ={d.img}/>
           <h3><a href={d.link} target="_blank">{d.title}</a></h3>
        </div>
       ))}
       </div>
    </div>
  )
}
