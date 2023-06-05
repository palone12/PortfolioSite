import React from "react";
import amazon from "../public/projects/amazon.png";
import cryptoImg from "../public/projects/crypto.png";
import dupr from "../public/projects/dupr.png";
import chillax from "../public/projects/chillax.png";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Amazon Clone"
            backgroundImg={amazon}
            projectUrl="/amazon"
            tech="React JS"
          />
          <ProjectItem
            title="My Dupr"
            backgroundImg={dupr}
            projectUrl="/dupr"
            tech="React JS"
          />
          <ProjectItem
            title="Cryptoverse"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="Next JS"
          />
          <ProjectItem
            title="Chillax Movie App"
            backgroundImg={chillax}
            projectUrl="/chillax"
            tech=" JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
