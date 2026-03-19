import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axios";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance.get("/home-cards")
      .then((res) => setCards(res.data))
      .catch((err) => console.error("Error fetching home cards:", err));
  }, []);

  return (
    <div className="w-full bg-black text-white font-inter md:h-screen overflow-y-auto flex flex-col pt-20">
    
      <section className="grid grid-cols-1 md:grid-cols-2 shrink-0 md:grow-0 min-h-[200px] md:min-h-[25vh] items-center">
        <div className="flex items-center justify-center px-6">
          <div className="text-white text-3xl md:text-5xl lg:text-5xl font-poppins font-semibold leading-tight space-y-2 text-left w-full max-w-2xl mb-10 mt-8">
            <p className="text-yellow-300">Designer,</p>
            <p>skill collector,</p>
            <p>backend builder.</p>
          </div>
        </div>
       
      </section>
      <section className="bg-grid px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={item._id || index}
              className="group space-y-2 rounded transform transition hover:text-yellow-300 duration-300 ease-in-out hover:scale-105"
            >
             <Link to="/projects">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-55 object-cover rounded-lg"
                />
              </Link>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-poppins text-lg font-medium space-x-2"
              >
                <span>{item.title}</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

    
      <footer className="bg-black text-gray-400 text-sm px-6 py-4 border-t border-white/10 flex justify-between items-center shrink-0 mt-auto">
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
