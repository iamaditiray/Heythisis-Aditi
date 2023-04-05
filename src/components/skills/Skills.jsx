import { useEffect, useState } from "react";
import Skilllist from "../skilllist/Skilllist";
import "./skills.scss";
import { webdevSkills, gdesignSkills, androidSkills, planSkills } from "../../data2";

export default function Skills() {
  const [selected, setSelected] = useState("webdev");
  const [data, setData] = useState([]);
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "webdev":
        setData(webdevSkills);
        break;
      case "gdesign":
        setData(gdesignSkills);
        break;
      case "android":
        setData(androidSkills);
        break;
      case "plan":
        setData(planSkills);
        break;
      default:
        setData(webdevSkills);
    }
  }, [selected]);

  useEffect(() => {
    setSkillsList([
      {
        id: "webdev",
        title: "Web Development",
      },
      {
        id: "gdesign",
        title: "Graphic Design",
      },
      {
        id: "android",
        title: "Android Development",
      },
      {
        id: "plan",
        title: "Programming Languages",
      },
    ]);
  }, []);

  return (
    <div className="skills" id="skills">
      <h1>Abilities I Possess</h1>
      <div className="options">
      <ul>
        {skillsList.map((item) => (
          <Skilllist
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      </div>
      <div className="progress-bar-container">
        {data.map((skill) => (
          <div className="skill-bar" key={skill.id}>

            <div className="skill-title">
              <img src={skill.img} alt={skill.title} />
              <h3>{skill.title}</h3>             
            </div>
            
            <div className="progress-container">
              <div className="progress-bar" style={{ width: skill.percentage }}>
                <p>{skill.percentage}</p>
              </div>            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
