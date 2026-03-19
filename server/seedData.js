const mongoose = require("mongoose");
const Project = require("./models/Project");
const HomeCard = require("./models/HomeCard");
require("dotenv").config();

const homeCards = [
  { title: "Frontend Designs", img: "https://miro.medium.com/v2/resize:fit:700/1*gsxg36ifLTJQjOpD5J5snA.gif" },
  { title: "Backend Architecture", img: "https://miro.medium.com/v2/resize:fit:1400/1*H0CTa4XarcrKNQsmoeFrzg.gif" },
  { title: "Real time Web app", img: "https://i.pinimg.com/originals/ae/41/9e/ae419e15dcbb88cda185e381c30da438.gif" },
  { title: "Dashboard Designs", img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/0e527894016125.5e74805477d6f.gif" },
];

const projects = [
  {
    title: "Travela",
    year: "2024",
    tags: "Web,Property Booking and ticket sales",
    number: "01",
    imgSrc: "https://cdn.dribbble.com/userupload/16056790/file/original-a9e6c209f61bde1e578be46a78024652.png?resize=752x&vertical=center", // using professional placeholder for now to replace local asset
    description: "A comprehensive property booking and ticket sales platform designed with modern UI principles. It provides seamless booking capability for users navigating the real estate industry.",
    features: ["Real-time checking of available properties", "Dynamic search filters", "Secure user authentication"],
    techStack: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    githubLink: "https://github.com/heyjaisal",
    websiteLink: "https://example.com"
  },
  {
    title: "Professional dashboard",
    year: "2024",
    tags: "Web,Admin Dashboard",
    number: "02",
    imgSrc: "https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bdcab91eef9ee357861375_64818db88bd88038b6bd3597_fc9612c134338b06b150a6599201fff543b4f881-1600x1200.jpeg",
    description: "A secure, feature-rich admin dashboard crafted for analytical overviews and content management.",
    features: ["Data visualization charts", "Role-based access", "Light/Dark mode toggle"],
    techStack: ["Next.js", "Redux Toolkit", "Chart.js"],
    githubLink: "https://github.com/heyjaisal",
    websiteLink: ""
  },
  {
    title: "Property Listing",
    year: "2024",
    tags: "Web, Air Bnb Clone",
    number: "03",
    imgSrc: "https://cdn.dribbble.com/userupload/16056790/file/original-a9e6c209f61bde1e578be46a78024652.png?resize=752x&vertical=center",
    description: "An Airbnb-style clone aimed at facilitating property listings, allowing users to host and rent properties across the globe.",
    features: ["Interactive Map selection", "Payment Processing API", "Host Reviews System"],
    techStack: ["React", "Stripe API", "Google Maps API", "Prisma"],
    githubLink: "https://github.com/heyjaisal",
    websiteLink: "https://example.com"
  },
  {
    title: "Real time chat App",
    year: "2025",
    tags: "Web,Using Socket.io and WRTC",
    number: "04",
    imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c9101f103493929.5f4e7a99b6d88.png",
    description: "A low-latency, real-time messaging platform enabling text, audio, and video communications over WebRTC.",
    features: ["Live typing indicators", "End-to-end P2P connections via WebRTC", "Socket.io integration"],
    techStack: ["Socket.io", "WebRTC", "React", "Node.js"],
    githubLink: "https://github.com/heyjaisal",
    websiteLink: ""
  },
  {
    title: "Blog Post",
    year: "2025",
    tags: "Web, Medium Blog Clone",
    number: "05",
    imgSrc: "https://cdn.prod.website-files.com/6243c3bb3b5a1852803d0c7f/67817a660086c4363aa7e94d_648ca6a5eef93e51ca68d331_scribe-blog-template.jpeg",
    description: "A rich-text sharing platform modeled after Medium, where writers can draft stories and readers can engage with claps and comments.",
    features: ["Rich text markdown editor", "Bookmark feature", "Social engagement claps system"],
    techStack: ["React", "QuillEditor", "Mongoose", "JWT Auth"],
    githubLink: "https://github.com/heyjaisal",
    websiteLink: "https://example.com"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected. Wiping old items...");
    await HomeCard.deleteMany({});
    await Project.deleteMany({});

    console.log("Seeding home cards...");
    await HomeCard.insertMany(homeCards);

    console.log("Seeding projects with dummy internal details...");
    await Project.insertMany(projects);

    console.log("✅ Seed complete!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();
