import { useEffect, useState } from "react";
import { IoMdArrowDown } from "react-icons/io";
import folderImage from "../assets/folder.png";
import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";

const ProjectBlock = ({ imgSrc, year, title, subtitle, tags, number, projectId }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${projectId}`)}
      className="w-full cursor-pointer overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
    >
      <img src={imgSrc} alt={title} className="w-full h-auto object-cover" />
      <div className="flex flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-5 gap-4 flex-wrap">
        <div className="text-sm text-neutral-600 whitespace-nowrap">{year}</div>
        <div className="flex flex-col text-left flex-1 min-w-0">
          <div className="text-sm sm:text-base font-bold text-black tracking-wide truncate">
            {title}
          </div>
          <div className="text-sm text-neutral-700 mt-1 truncate">{tags}</div>
        </div>
        <div className="text-2xl sm:text-3xl font-light text-black tracking-tight whitespace-nowrap">
          {number}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosInstance.get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="w-full font-inter relative z-20 overflow-x-hidden">
      <div className="relative z-30 bg-white min-h-[200vh]">
        <div className="flex flex-col-reverse lg:flex-row pt-16 px-6 sm:px-16 md:px-20 items-start">
          <div className="lg:ml-[10rem] lg:max-w-[50%]">
            <h1 className="font-semibold font-poppins text-black text-[clamp(2.5rem,6vw,4.5rem)] lg:text-[clamp(3.5rem,6.5vw,5.5rem)]">
              <div>Selected</div>
              <div className="mt-[-1.6rem] sm:mt-[-1.9rem] md:mt-[-2.3rem] lg:mt-[-3.0rem] text-yellow-300">
                works
              </div>
            </h1>
          </div>

          <div className="lg:ml-auto lg:mt-15">
            <img
              src={folderImage}
              alt="Folder"
              className="w-24 sm:w-28 md:w-32 lg:w-40"
            />
          </div>
        </div>

        <div className="flex justify-between px-6 sm:px-16 md:px-10 mt-4 pb-5">
          <IoMdArrowDown className="w-15 h-15 md:w-20 md:h-20 text-neutral-600 items-start mt-8" />
          <div className="flex items-start gap-2 max-w-[12rem] md:max-w-[18rem] text-right">
            <p className="text-sm sm:text-base text-neutral-700 leading-snug">
              Projects cutting across product and visual design and an
              additional section, playground, that contains shots from my
              exploration into my other design passions.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-300 mx-6 sm:mx-16 md:mx-20 my-4" />

        <div className="w-full px-6 sm:px-12 md:px-20 py-10 space-y-12">
          {projects.length > 0 && (
            <ProjectBlock
              key={projects[0]._id}
              projectId={projects[0]._id}
              imgSrc={projects[0].imgSrc}
              year={projects[0].year}
              title={projects[0].title}
              tags={projects[0].tags}
              number={projects[0].number}
            />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1).map((p) => (
              <ProjectBlock
                key={p._id}
                projectId={p._id}
                imgSrc={p.imgSrc}
                year={p.year}
                title={p.title}
                tags={p.tags}
                number={p.number}
              />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
