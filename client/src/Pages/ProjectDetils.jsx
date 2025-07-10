import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";
import axiosInstance from "../utils/axios";

export default function ProjectDetails() {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!project) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div>
      <h1 className="text-black font-poppins text-4xl lg:text-6xl px-10 lg:px-28 flex flex-col items-center justify-center pt-20">
        {project.title}
      </h1>

      <hr className="border-t border-gray-300 mx-10 sm:mx-16 md:mx-20 my-4" />

      <div className="w-full overflow-hidden">
        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-full h-auto object-cover px-7 lg:px-16 py-10"
        />
      </div>

      <div className="text-neutral-700 font-medium font-poppins sm:text-base px-10 lg:px-28 leading-relaxed space-y-4">
        <p>{project.description}</p>
      </div>

      <div className="text-black font-poppins text-3xl lg:text-5xl px-7 lg:px-16 my-10">
        Features
      </div>
      <div className="text-neutral-700 font-medium font-poppins sm:text-base px-10 lg:px-28 leading-relaxed space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="text-black font-poppins text-3xl lg:text-5xl px-7 lg:px-16 my-10">
        Tech Stack
      </div>
      <div className="text-neutral-700 font-medium font-poppins sm:text-base px-10 lg:px-28 leading-relaxed space-y-4 mb-10">
        <ul className="list-disc pl-5 space-y-2">
          {project.techStack.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-6 mt-8 mb-5 px-10">
  <a
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-200 flex items-center gap-2"
  >
    GitHub <IoLogoGithub className="text-lg" />
  </a>

  {project.websiteLink && (
    <a
      href={project.websiteLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition duration-200 flex items-center gap-2"
    >
      Website <SlGlobe className="text-lg" />
    </a>
  )}
</div>

    </div>
  );
}
