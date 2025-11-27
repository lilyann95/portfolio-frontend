import React from "react";
import assets from "../assets/assets.js";

const projects = [
  {
    title: "Book management system",
    description:
      "A full-stack book app with CRUD operations. It has the latest books with information like authors, published date",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    githubLink: "https://github.com/lilyann95/crud-mern",
    image: `${assets.react}`,
  },
  {
    title: "Workforce management system",
    description:
      "A full-stack workforce app with JWT authentication, redux and CRUD operations.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Redux"],
    liveLink: "#",
    githubLink: "https://github.com/lilyann95/mern-redux",
    image: `${assets.react}`,
  },
  {
    title: "E-Commerce Store",
    description:
      "An online e-commerce store with shopping cart, checkout, and payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    image: `${assets.react}`,
  },
];

const Project = () => {
  return (
    <>
      <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-3xl shadow-xl p-4 hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-5"
              />
              <div className="">
                <h3 className="text-[#820E70] text-xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="mb-5 md:min-h-10">{project.description}</p>
              </div>

              <p className="text-sm text-gray-600 mb-3">
                {project.techStack.join(", ")}
              </p>
              <div className="mb-5 flex items-center gap-4 pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#820E70] hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#820E70] hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
