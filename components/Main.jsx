import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm  tracking-widest text-gray-600">
            LET's BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi , I'm <span className="text-[#5651e5]">Pranay</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text -gray-600 max-w-[70%] m-auto ">
            I'm a frontend web developer specialzing in building exceptional
            digital experience .Currenlty , I'm focused on building responsive
            front-end web applications while learning back-end technologies
          </p>
          <div className="flex items-center space-x-10 justify-center max-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/pranay-alone-b75106152/">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/palone12">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="mailto:alonepranay123@gmail.com">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="">
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
