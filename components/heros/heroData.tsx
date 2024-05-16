import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const heroData = [
  {
    label: "github",
    href: "https://github.com/shivajiratho",
    style:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
    icon: <FaGithub />,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/shivaji-banoth-21404b1b8/",
    style:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600",
    icon: <FaLinkedinIn />,
  },
  
] as const;
