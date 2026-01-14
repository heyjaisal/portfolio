import { IoMdArrowDown } from "react-icons/io";
import folderImage from "../assets/folder.png";
import HomePage from "../assets/better.png";
import { useNavigate } from "react-router-dom";

const ProjectBlock = ({ imgSrc, year, title, subtitle, tags, number, projectId }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/1`)}
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
  return (
    <div className="w-full font-inter relative z-20 overflow-x-hidden">
      <div className="relative z-30 bg-white min-h-[200vh]">
        <div className="flex flex-col-reverse lg:flex-row pt-16 px-10 sm:px-16 md:px-20 items-start">
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

        <div className="flex justify-between px-5 sm:px-16 md:px-10 mt-4 pb-5">
          <IoMdArrowDown className="w-15 h-15 md:w-20 md:h-20 text-neutral-600 items-start mt-8" />
          <div className="flex items-start gap-2 max-w-[12rem] md:max-w-[18rem] text-right">
            <p className="text-sm sm:text-base text-neutral-700 leading-snug">
              Projects cutting across product and visual design and an
              additional section, playground, that contains shots from my
              exploration into my other design passions.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-300 mx-10 sm:mx-16 md:mx-20 my-4" />

        <div className="w-full px-6 sm:px-12 md:px-20 py-10 space-y-12">
          <ProjectBlock
            imgSrc={HomePage}
            year="2024"
            title="Travela"
            tags="Web,Property Booking and ticket sales"
            number="01"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectBlock
              imgSrc="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bdcab91eef9ee357861375_64818db88bd88038b6bd3597_fc9612c134338b06b150a6599201fff543b4f881-1600x1200.jpeg"
              year="2024"
              title="Professional dashboard"
              tags="Web,Admin Dashboard"
              number="02"
            />
            <ProjectBlock
              imgSrc="https://cdn.dribbble.com/userupload/16056790/file/original-a9e6c209f61bde1e578be46a78024652.png?resize=752x&vertical=center"
              year="2024"
              title="Property Listing"
              tags="Web, Air Bnb Clone"
              number="03"
            />
            <ProjectBlock
              imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c9101f103493929.5f4e7a99b6d88.png"
              year="2025"
              title="Real time chat App"
              tags="Web,Using Socket.io and WRTC"
              number="04"
            />
            <ProjectBlock
              imgSrc="https://cdn.prod.website-files.com/6243c3bb3b5a1852803d0c7f/67817a660086c4363aa7e94d_648ca6a5eef93e51ca68d331_scribe-blog-template.jpeg"
              year="2025"
              title="Blog Post"
              tags="Web, Medium Blog Clone"
              number="05"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
