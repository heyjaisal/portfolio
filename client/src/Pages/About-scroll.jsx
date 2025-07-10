import React from "react";
import HomePage from "../assets/last.png";

export default function Aboutscroll() {
  return (
    <div className="mb-10">
      <section className="px-10 sm:px-16 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-10">
          <div className="relative h-full flex justify-center lg:justify-end">
            <div className="hidden lg:block sticky top-24 self-start w-full">
              <div
                className="w-full"
                style={{ width: "100%", maxWidth: "100%" }}
              >
                <img
                  src={HomePage}
                  alt="Sticky Visual"
                  className="w-full object-contain"
                  style={{ height: "auto" }}
                />
              </div>
            </div>

            <div className="block lg:hidden">
              <img
                src={HomePage}
                alt="Mobile Visual"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-6 pb-40">
            <h2 className="text-lg sm:text-xl font-mono text-gray-400">
              / ABOUT ME
            </h2>
            <div className="text-neutral-700 font-medium font-poppins sm:text-base leading-relaxed space-y-4">
              <p>
                I'm Jaisal, a MERN Stack Developer who leads with a builder's
                mindset and ships with precision. From React and React Native to
                backend logic with Node.js and MongoDB, I turn ideas into
                scalable, production-ready products.
              </p>
              <p>
                My experience includes working on real-world projects at Wezlon,
                where I contributed to full-scale applications used in live
                environments. I don't just write clean code. I design flow,
                optimize performance, and bridge the gap between design, dev,
                and deployment.
              </p>
            </div>

<div className="text-xs sm:text-sm text-gray-500 ml-35 py-5 ">
   
    <div className="border-l-4 border-yellow-400 pl-4 space-y-2 ">
      <p className="font-semibold text-black">
        🚀 MERN Stack Developer, Backend-focused.
      </p>
      <p className="font-semibold text-black">
        ⚙️ Built real-time, production-level apps.
      </p>
    </div>
  </div>

            <h2 className="text-black text-lg sm:text-xl font-semibold font-poppins underline">
              Project Experience
            </h2>
            <div className="text-neutral-700 font-medium font-poppins sm:text-base leading-relaxed space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Built scalable real-time chat apps using technologies like
                  Socket.IO, React, Redux, and MongoDB including message
                  caching, typing indicators, and multi-role messaging (User ↔
                  Host systems).
                </li>
                <li>
                  Integrated payment systems that involve holding funds
                  temporarily (escrow-like behavior) before transferring used
                  services like Stripe and custom-built flows for reliable,
                  secure transactions.
                </li>
                <li>
                  Worked on Airbnb-style property booking platforms with
                  features like property listing management, host/user roles,
                  booking availability logic, real-time updates, and calendar
                  integration.
                </li>
                <li>
                  Experience working with collaborative teams on real-world
                  projects at Wezlon, handling live user data, cross-platform
                  compatibility, and product-level performance expectations.
                </li>
              </ul>
              
            </div>
          </div>
          
        </div>
        
      </section>
      
    </div>
  );
}
