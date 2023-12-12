import Image from "next/image";
import Link from "next/link";

import StarlocoverImg from "../public/assets/projects/Starlocover.png";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "JavaScript",
  "Tailwind",
  "PHP",
  "Typescript",
  "Stripe",
] as const;

// body of text found in project pages
function DictionaryTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
      I engineered Starlo, a dynamic music streaming platform,
      by harnessing the versatility of JavaScript, along with PHP's 
      robust server-side scripting. Seamlessly integrating Tailwind for the UI components,
      I also established a smooth connectionwith various APIs to ensure a seamless audio experience.{" "}
        <Link
          href=""
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          {" "}
        </Link>
        <span></span>
      </p>

      <ProjectButtonDemo url="https://starloworld.com" />
    </div>
  );
}

// dictionary page
export default function Dictionary(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={StarlocoverImg}
        />
        <ProjectHeroText h2="Starlo World" h3="Tailwind, PHP ,Javascript, Stripe, Typescript" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <DictionaryTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
