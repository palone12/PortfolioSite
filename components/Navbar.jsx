import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[1000] bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assests/last.png" alt="logo" height={80} width={80} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#experience">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Experience
              </li>
            </Link>
            <Link href="https://drive.google.com/file/d/1s6k3w-ye65hQz8tfr6pA3AtE726_vf0F/view?usp=sharing">
              <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#ecf0f3] p-10  ease-in duration-500"
              : "fixed left-[-100%] p-10  ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assests/last.png"
                  alt="/"
                  height="35"
                  width="87"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's Build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Contact
                </li>
              </Link>
              <Link href="https://drive.google.com/file/d/1s6k3w-ye65hQz8tfr6pA3AtE726_vf0F/view?usp=sharing">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Experinece
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5661e5]">
                Let's Connet
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/pranay-alone-b75106152/">
                    <FaLinkedinIn size={25} />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/palone12">
                    <FaGithub size={25} />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="mailto:alonepranay123@gmail.com">
                    <AiOutlineMail size={25} />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://drive.google.com/file/d/1s6k3w-ye65hQz8tfr6pA3AtE726_vf0F/view?usp=sharing">
                    <BsFillPersonLinesFill size={25} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
