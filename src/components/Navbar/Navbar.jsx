import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
const NavLink = [
  {
    id: 1,
    name: "Home",
    Linke: "/#",
  },
  {
    id: 2,
    name: "About",
    Linke: "/#",
  },
  {
    id: 3,
    name: "Contact",
    Linke: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/#",
  },
  {
    id: 2,
    name: "Fruites",
    link: "/#",
  },
  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <>
      <div className=" shadow-md">
        <div className="container flex justify-between  py-4 sm:py-3">
          <div className="font-bold text-3xl">Logo</div>
          <div>
            <ul className="sm:flex items-center gap-10">
              {NavLink.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block hover:text-primary text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="cursor-pointer group relative">
                <a
                  href="/#"
                  className="inline-block  hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-2 py-2">
                    Dropdown
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
                  <ul>
                    {DropdownLinks.map(({id,name,link}) => (
                      <li key={id}>
                        <a 
                        href={link}
                        className="inline-block text-xl w-full rounded-md p-2  hover:bg-primary/20 "
                        >{name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
              <button className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
              <FaUser/>MyAccount
              </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
