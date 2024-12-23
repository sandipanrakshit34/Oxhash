import { useState } from "react";
import { Logo } from "../../assets/images/index";
import { IoMdArrowDropdown } from "react-icons/io";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from "react-router-dom";


function Header() {
  let [toggle, setToggle] = useState(true)

  function toggler(){
    setToggle(!toggle)
  }

  let navLinks = [
    {
      id: 1,
      value: "Testnet",
      link: "/",
    },
    {
      id: 2,
      value: "Learn",
      link: "/",
    },
    {
      id: 3,
      value: "Build",
      link: "/",
    },
    {
      id: 4,
      value: "Ecosystem",
      link: "/Ecosystem",
    },
    {
      id: 5,
      value: "Community",
      link: "/",
    },
  ];
  return (
    <div className="w-full max-w-[1920px] flex justify-center items-center">
      <div className="w-[100%] lg:w-[80%] py-5 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="w-[40%]">
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className={`${toggle ? "grid grid-cols-1 lg:grid-cols-5 gap-4 items-center gap-x-10 text-white lg:ml-0 lg:mt-0 mt-5 ml-6": "hidden text-white"}`}>
            {navLinks.map(({value, link}, index) => {
              return <Link to={link} key={index} className="flex items-center text-[15px] font-bold">{value}<IoMdArrowDropdown/></Link>;
            })}
          </ul>
          <button onClick={toggler} className="text-white absolute top-8 right-10 lg:hidden">
          {toggle ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
