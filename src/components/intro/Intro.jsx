import "./intro.scss";
import { ReactTypical } from "@deadcoder0904/react-typical";

export default function Intro() {

  const handleHireMeClick = () => {
    const message = encodeURIComponent("Hey! Just had a look into your portfolio website.");
    window.open(`https://wa.me/918777831265?text=${message}`, '_blank');
  };

  const handleGetResumeClick = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/assets/AditiRay-Resume.pdf";
    downloadLink.download = "AditiRay-Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }


  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
            <img src="assets/mypic3.png" alt="aditi ray"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey There, I'm</h2>
          <h1>Aditi Ray</h1>
          <div className="profile">
            <div className="freelance">
            <div className="heading" style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ marginRight: "10px" }}>Freelance</h3>
              
              <span className="primary">
              <h3>
                  <ReactTypical style={{ fontSize: "40px",marginTop: "10px", color: "crimson"}}
                    loop={Infinity}
                    steps={[
                      "<Web Developer/>", 
                      2000,
                      "<Graphic Designer/>",
                      2000,
                      "<FrontEnd Developer/>",
                      2000,
                    ]}
                  />
                </h3>
              </span>
            </div>  
            </div>
            <div className="button-container">
              <ul>
                <li>
                  <button className="btn primary-btn" onClick={handleHireMeClick}>
                    Hire Me
                  </button>
                </li>    
                <li>
                  <button className="btn btn highlighted-btn" onClick={handleGetResumeClick}>
                    Get Resume
                  </button>
                </li>
              </ul> 
            </div>
          </div>
        </div>
        <a href="#aboutme">
          <img src="assets/down.png" alt="down arrow"></img>
        </a>
      </div>
    </div>
  );
}
