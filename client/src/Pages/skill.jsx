import React from "react";
import HomePage from "../assets/last.png";

export default function Skill() {
 
  const skills = [
  "MongoDB & Mongoose",
  "Express.js & REST APIs",
  "React.js & Next.js",
  "Node.js",
  "Redux & State Management",
  "Socket.IO & Real-time Apps",
  "JWT & OAuth Authentication",
  "Tailwind CSS & Responsive UI",
  "JavaScript",
  "Git & GitHub",
  "CI/CD (Vercel, Railway, AWS)",
  "Postman & API Testing",
];

const mid = Math.ceil(skills.length / 2);
const leftSkills = skills.slice(0, mid);
const rightSkills = skills.slice(mid);

  return (
    <div>
      <section className="px-10 sm:px-16 md:px-20">
        <hr className="border-t border-gray-300 mx-10 sm:mx-16 md:mx-20 my-4" />
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-10">
          <div className="relative h-full flex justify-center lg:justify-end">
            <div className="lg:block sticky top-24 self-start w-full">
              <div
                className="w-full"
                style={{ width: "100%", maxWidth: "100%" }}
              >
                <h1 className="text-5xl font-poppins">My skills and </h1>
                <h1 className="text-5xl font-poppins"> Intrests</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 pb-40">
            <div className="text-neutral-700 font-medium font-poppins sm:text-base leading-relaxed space-y-4">
              <p>
                I’m driven by the challenge of adapting my skills, processes,
                and thinking to meet the evolving needs of the world. I excel in
                collaborative, ambitious teams that create inclusive
                environments where everyone feels they belong. My skills and
                interests cut across the following:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
      <ul className="space-y-4 text-base sm:text-lg leading-snug text-black">
        {leftSkills.map((label, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 mr-3 bg-yellow-500 rounded-sm"></span>
            {label}
          </li>
        ))}
      </ul>
      <ul className="space-y-4 text-base sm:text-lg leading-snug text-black">
        {rightSkills.map((label, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 mr-3 bg-yellow-500 rounded-sm"></span>
            {label}
          </li>
        ))}
      </ul>
    </div>
          </div>
        </div>
      </section>
    </div>
  );
}
