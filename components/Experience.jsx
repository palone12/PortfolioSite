import Image from "next/image";
import Link from "next/link";
import React from "react";
import experienceIMg from "../public/assests/dev.jpg";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full md:h-screen p-2 flex items-center py-16 z-10"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <div className="flex flex-between items-center space-x-10">
            <h3 className="py-2">Binary Touch Technologies </h3>
            <span className="text-green-500 underline">
              <Link href="https://www.binarytouch.com/">Visit</Link>
            </span>{" "}
          </div>
          <h4 className="py-2">
            {" "}
            Desiganation - Software Development Engineer (SDE){" "}
          </h4>
          <ul className="list py-2 text-gray-600 px-4">
            <li>
              Designed and developed dynamic and responsive websites using HTML,
              CSS, JavaScript, and React
            </li>
            <li>
              Managed with REST APIs to retrieve and display data from databases
            </li>
            <li>
              {" "}
              Improved website performance and speed through optimization
              techniques by 25%
            </li>
            <li>
              Demonstrated expertise in Next.js, a widely adopted framework for
              building server-side rendered applications. • Rendered state
              management using Redux
            </li>
            <li>
              Successfully migrated the CSS library from Tailwind to Material
              UI, resulting in a more cohesive and consistent UI design.
            </li>
            <li>
              Leveraged React-hook-form and Material UI to design custom form
              elements that enhanced validation and usability by 50%
            </li>
            <li>
              {" "}
              Created Technical Require Document (TRD) before implementing new
              features to keep recorded of new changes and code refactoring ,
              which reduced the feature development time by 20%
            </li>
          </ul>
          <div className="flex flex-between items-center space-x-10">
            <h3 className="py-2">Newton School </h3>
            <span className="text-green-500 underline">
              <Link href="https://my.newtonschool.co/user/alonepranay123">
                Visit
              </Link>
            </span>{" "}
          </div>
          <h4 className="py-2"> Internship Trainee - Fullstack Development</h4>
          <ul className="list py-2 text-gray-600 px-4">
            <li>Full Stack Web Development along with problem-solving</li>
            <li>
              Technical Stack Learnt: React, Javascript, HTML , CSS, BootStrap,
              and Data structures and Algorithms with Java.
            </li>
            <li>
              Participated in the various coding contests organized by the
              platform.
            </li>
          </ul>
          <p className="py-2 text-gray-600"></p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={experienceIMg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
