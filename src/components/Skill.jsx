import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import assets from "../assets/assets";

const skills = [
  { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#3C873A" /> },
  { name: "MongoDB", icon: <FaDatabase size={50} color="#4DB33D" /> },
  { name: "HTML5", icon: <FaHtml5 size={50} color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} color="#1572B6" /> },
  { name: "GitHub", icon: <FaGithub size={50} color="#5968BA" /> },
  {
    name: "Firebase",
    icon: <img src={assets.firebase} alt="firebase" className="w-12 -mt-2" />,
  },
  { name: "Bootstrap", icon: <FaBootstrap size={50} color="#4A05B3" /> },
  {
    name: "TailwindCss",
    icon: (
      <img
        src={assets.tailwindcss}
        alt="tailwindcss"
        className="w-12 mb-3 mt-2"
      />
    ),
  },
  {
    name: "Javascript",
    icon: (
      <img src={assets.javascript} alt="Javascript" className="w-12 mt-2" />
    ),
  },
];

const Skill = () => {
  return (
    <>
      <section id="skills" className="overflow-hidden py-5 bg-black">
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <h2 className="text-4xl font-bold mb-10 text-center text-white">
            Skills
          </h2>
          <div className="flex flex-nowrap whitespace-nowrap justify-center animate-scroll gap-25">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-4"
              >
                {skill.icon}
                <span className="font-medium text-white">{skill.name}</span>
              </div>
            ))}
            {skills.map((skill) => (
              <div
                key={skill.name + "-copy"}
                className="flex flex-col items-center gap-4"
              >
                {skill.icon}
                <span className="font-medium text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
