import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <ul className="fixed w-[100%] z-10 flex justify-center text-xl md:text-2xl leading-snug font-manrope font-extrabold">
        <li className="m-3 transform transition duration-300 hover:scale-110 hover:[text-shadow:_0_2px_4px_red]">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:text-black"
          >
            Home
          </Link>
        </li>
        <li className="m-3 transform transition duration-300 hover:scale-110 hover:[text-shadow:_0_2px_4px_red]">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-white hover:text-black"
          >
            Skills
          </Link>
        </li>
        <li className="m-3 transform transition duration-300 hover:scale-110 hover:[text-shadow:_0_2px_4px_red]">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white hover:text-black"
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
