import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  // const [activeSection, setActiveSection] = useState("home");
  // const bgColor = {
  //   home: "",
  //   about: "bg-[#204161] text-white",
  //   skills: "",
  //   projects: "",
  //   contact: "",
  // }[activeSection];

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },

  //     { threshold: 0.6 }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => observer.disconnect();
  // }, []);
  return (
    <>
      <div
        className={`sticky w-full top-0 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-5 bg-[#820E70] overflow-x-hidden`}
      >
        <div className="flex items-center justify-between text-white">
          <h1 className="text-3xl font-bold w-2/5">
            LILIAN <span className="text-2xl">.</span>
          </h1>
          <ul className="hidden sm:flex items-center justify-between w-3/5">
            <li className="">
              <Link
                smooth="true"
                to="#home"
                className="inline-block text-xl font-semibold transition-transform duration-500 hover:scale-105 hover:translate-2"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                smooth="true"
                to="#about"
                className="inline-block text-xl font-semibold transition-transform duration-500 hover:scale-105 hover:translate-2"
              >
                About
              </Link>
            </li>

            <li className="">
              <Link
                smooth="true"
                to="#skills"
                className="inline-block text-xl font-semibold transition-transform duration-500 hover:scale-105 hover:translate-2"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                smooth="true"
                to="#projects"
                className="inline-block text-xl font-semibold transition-transform duration-500 hover:scale-105 hover:translate-2"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                smooth="true"
                to="#contact"
                className="inline-block text-xl font-semibold transition-transform duration-500 hover:scale-105 hover:translate-2"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="sm:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl cursor-pointer"
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-screen overflow-hidden bg-[#820E70] z-50 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-white">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center justify-end p-3 cursor-pointer"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <p className="text-lg">Back</p>
          </div>
          <div className="text-center">
            <li className="py-4">
              <Link
                to="#home"
                onClick={() => setVisible(false)}
                className="text-3xl font-semibold cursor-pointer hover:underline"
              >
                Home
              </Link>
            </li>
            <hr />
            <li className="py-4">
              <Link
                to="#about"
                onClick={() => setVisible(false)}
                className="text-3xl font-semibold cursor-pointer hover:underline"
              >
                About
              </Link>
            </li>
            <hr />
            <li className="py-4">
              <Link
                smooth="true"
                to="#skills"
                onClick={() => setVisible(false)}
                className="text-3xl font-semibold cursor-pointer hover:underline"
              >
                Skills
              </Link>
            </li>
            <hr />
            <li className="py-4">
              <Link
                smooth="true"
                to="#projects"
                onClick={() => setVisible(false)}
                className="text-3xl font-semibold cursor-pointer hover:underline"
              >
                Projects
              </Link>
            </li>
            <hr />
            <li className="py-4">
              <Link
                smooth="true"
                to="#contact"
                onClick={() => setVisible(false)}
                className="text-3xl font-semibold cursor-pointer hover:underline"
              >
                Contact
              </Link>
            </li>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
