import Link from "next/link";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// bottom section of global side menu navbar
export default function NavbarBottomSideMenu(): JSX.Element {
  const sideMenuNavbarData = [
    {
      className:
        "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-sky-600",
      href: "https://www.linkedin.com/in/shivaji-banoth-21404b1b8/",
      icon: <FaLinkedinIn />,
    },
    {
      className:
        "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
      href: "https://github.com/shivajiratho",
      icon: <FaGithub />,
    },

  ] as const;

  return (
    <div className="pt-40">
      <p className="uppercase tracking-widest text-indigo-600">
        Let&#39;s Connect
      </p>

      <div className="flex items-center justify-evenly my-4 w-full sm:w-4/5">
        {sideMenuNavbarData.map((e) => (
          <Link href={e.href} target="_blank" key={e.href}>
            <div className={e.className}>{e.icon}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
