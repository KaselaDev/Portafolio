import React from "react";
import "../../style/conocimientos.css";
import Icon from "../../utils/Icon"
import motorMaster from "../../img/motorMasterLogo.svg"

const StatSection = ({ title, skills }) => (
  <div className="stat">
    <div className="titulo">
      <h3>{title}</h3>
    </div>
    {skills.map((skill, index) => (
      (skill.iconEspecial)?(
        <div key={index} className={skill.className + " tag"}>
        <img className="iconEspecial" src={skill.iconEspecial} alt={skill.name} />
        <h4>{skill.name}</h4>
      </div>
      ):(
        <div key={index} className={skill.className + " tag"}>
          <Icon type={skill.typeIcon} icon={skill.icon}/>
          <h4>{skill.name}</h4>
        </div>
      )
    ))}
  </div>
);

const Proyectos = () => {
  const sections = [
    {
      title: "Front-end",
      skills: [
        { className: "html", typeIcon: "brands", icon: "faHtml5", name: "HTML" },
        { className: "css", typeIcon: "brands", icon: "faCss3Alt", name: "CSS" },
        { className: "js", typeIcon: "brands", icon: "faSquareJs", name: "JavaScript" },
      ],
    },
    {
      title: "Back-end",
      skills: [
        { className: "php", typeIcon: "brands", icon: "faPhp", name: "PHP" },
        { className: "sql", typeIcon: "solid", icon: "faDatabase", name: "SQL" },
        { className: "bash", typeIcon: "solid", icon: "faCube", name: "Bash Script" },
      ],
    },
    {
      title: "FrameWork",
      skills: [
        { className: "react", typeIcon: "brands", icon: "faReact", name: "React" },
        { className: "motorMaster", typeIcon: "solid", icon: "faDatabase", name: "MotorMaster.php", iconEspecial: motorMaster },
      ],
    },
    {
      title: "Otros",
      skills: [
        { className: "git", typeIcon: "brands", icon: "faGitAlt", name: "Git" },
        { className: "figma", typeIcon: "brands", icon: "faFigma", name: "Figma" },
        { className: "trello", typeIcon: "brands", icon: "faTrello", name: "Trello" },
      ],
    },
  ];

  return (
    <section className="stats" id="Conocimientos">
      <h2 className="subTitulo">Conocimientos</h2>
      <br />
      <div className="contentStats">
        {sections.map((section, index) => (
          <StatSection key={index} title={section.title} skills={section.skills} />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
