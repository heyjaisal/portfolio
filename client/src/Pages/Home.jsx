import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full bg-black text-white font-inter overflow-y-auto pt-17.5 ">
    
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[249px]">
        <div className="flex items-center justify-center px-6">
          <div className="text-white text-3xl md:text-4xl font-poppins font-semibold leading-tight space-y-4 text-left w-full max-w-md">
            <p>Designer,</p>
            <p>skil collector,</p>
            <p>backend builder.</p>
          </div>
        </div>
       
      </section>

      <section className="bg-grid px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Frontend Designs",
              img: "https://miro.medium.com/v2/resize:fit:700/1*gsxg36ifLTJQjOpD5J5snA.gif",
            },
            {
              title: "Backend Architecture",
              img: "https://miro.medium.com/v2/resize:fit:1400/1*H0CTa4XarcrKNQsmoeFrzg.gif",
            },
            {
              title: "Real time Web app",
              img: "https://i.pinimg.com/originals/ae/41/9e/ae419e15dcbb88cda185e381c30da438.gif",
            },
            {
              title: "Dashboard Designs",
              img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/0e527894016125.5e74805477d6f.gif",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group space-y-2 rounded transform transition hover:text-yellow-300 duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-55 object-cover rounded-lg"
              />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-poppins space-x-1"
              >
                <span>{item.title}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

    
      <footer className="bg-black text-gray-400 text-sm px-6 py-3 flex justify-between items-center">
        <div className="flex space-x-6">
          {[
            { name: "GitHub", url: "https://github.com/heyjaisal", external: true },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/ask-jaisal",
              external: true,
            },
          ].map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-poppins space-x-1 hover:text-yellow-300 transition"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={12} />
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.url}
                className="flex items-center space-x-1 hover:text-yellow-300 transition"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={12} />
              </Link>
            )
          )}
        </div>
        <a
          href="https://spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 hover:text-white transition"
        >
          <span className="font-mono hover:text-yellow-300">© 2025</span>
        </a>
      </footer>
    </div>
  );
}
