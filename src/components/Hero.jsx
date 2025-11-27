import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import assets from "../assets/assets.js";

const Hero = () => {
  return (
    <>
      <section id="home" className="sm:h-[85vh] bg-[#b0b3bc]">
        <div className="flex flex-col sm:flex-row items-center justify-between h-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <div className="py-5 sm:py-2">
            <h1 className="text-4xl font-bold mb-2">Hi, I'm Lilian</h1>
            <h1 className="text-5xl font-bold tracking-wider mb-6">Nabawesi</h1>
            <p className="text-md mb-3">
              <img src={assets.emailNo} alt="my contact" />
            </p>
            <p className="text-md mb-3">
              <strong>LinkedIn: </strong>
              <a
                href="https://www.linkedin.com/in/lilian-nabawesi-024a7b215/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#820E70] hover:underline"
              >
                https://www.linkedin.com/in/lilian-nabawesi-024a7b215/
              </a>
            </p>
            <p className="text-md mb-3">
              <strong>Github: </strong>
              <a
                href="https://github.com/lilyann95"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#820E70] hover:underline"
              >
                https://github.com/lilyann95
              </a>
            </p>
            <p className="text-xl mb-6">
              MERN Stack Developer | Building Modern Web Apps
            </p>
            <div className="py-5">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="bg-white text-[#820E70] font-semibold px-6 py-3 rounded-3xl cursor-pointer hover:bg-[#820E70] hover:text-white transition"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="">
            <img src={assets.lilian} alt="My photo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
