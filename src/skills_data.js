import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaAws } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";

export const skills_data = [
  {
    id: 0,
    title: "HTML5",
    icon: <AiOutlineHtml5 />,
    text: "Fundamental technology behind everything seen in a web browser, and it's used to build everything from simple web pages to complex web applications and services.",
  },
  {
    id: 1,
    title: "CSS3",
    icon: <FaCss3 />,
    text: "Web pages have to be easily navigable and fully visible on all devices. Whether desktop, tablet or mobile, CSS combines with HTML makes responsive design possible.",
  },
  {
    id: 2,
    title: "JavaScript",
    icon: <SiJavascript />,
    text: "Essential to the Internet experience as more apps built with increased user interaction and complexity. Combined with Node.js, JavaScript perfectly works for server-side needs.",
  },
  {
    id: 3,
    title: "React",
    icon: <FaReact />,
    text: "Library for developing and maintaining reusable, easily integrable UI components. Reduces development time and provide a responsive user interface for website, web app and mobile app.",
  },
  {
    id: 4,
    title: "Firebase",
    icon: <TbBrandFirebase />,
    text: "Enables to build rich and collaborative apps with secure access to the database from client-side code. While offline, realtime events continue to fire, giving the user a responsive experience.",
  },
  {
    id: 5,
    title: "AWS",
    icon: <FaAws />,
    text: "Virtual environment that lets to load the software and services based on requirements. Apps can scale and grow with database storage, content delivery, compute power and other tools.",
  },
];
