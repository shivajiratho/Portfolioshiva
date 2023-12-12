import Image from "next/image";
import Link from "next/link";

import chattykenportfileImg from "../public/assets/projects/chattykenportfile.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "JavaScript",
  "Hyper 3D"
] as const;

// body of text found in project pages
function DictionaryTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
      Our team is meticulously constructing "Chatty Ken," a versatile web application 
      that will host an array of intelligent bots, each engineered for specialized tasks, 
      and all refined through the application of advanced machine learning techniques. 
      These bots, driven by deep learning and enhanced with strategic AI prompting, 
      are set to offer a rich, adaptive, and context-sensitive dialogue, enabling them 
      to assist with an extensive range of activities, from scheduling and information 
      retrieval to expert support in complex domains.{" "}
        <Link
          href=""
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          {" "}
        </Link>
        <span></span>
      </p>

      <ProjectButtonCode url="https://github.com/milliorn/UI-Dictionary" />
      <ProjectButtonDemo url="https://react-material-ui-dictionary.netlify.app/" />
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
          src={chattykenportfileImg}
        />
        <ProjectHeroText h2="Chatty Ken" h3="Openai, PHP, Javascript, Stripe, Javascript" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <DictionaryTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
