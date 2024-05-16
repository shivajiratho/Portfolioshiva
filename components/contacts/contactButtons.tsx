import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const contactButtons = [
  {
    button: <FaGithub />,
    className: "rounded-full m-0.02 p-6 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300",
    href: "https://github.com/shivajiratho",
    label: "Github",
  },
  {
    button: <FaLinkedinIn />,
    className: "rounded-full m-0.02 p-6 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600",
    href: "www.linkedin.com/in/shivaji-banoth-21404b1b8",
    label: "LinkedinIn",
  },
  
] as const;
