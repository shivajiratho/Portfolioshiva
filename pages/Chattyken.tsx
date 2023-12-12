import Image from "next/image";
import Link from "next/link";

import chattykenportfileImg from "../public/assets/projects/chattykenportfile.png";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "JavaScript",
  "PHP",
  "Typescript",
  "OpenAI",
] as const;

// body of text found in project pages
function LandingPageTextBody() {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
      {" "}
        <Link
          href=""
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          Chatty Ken's platform was conceived through the innovative application of 
          deep machine learning algorithms, ensuring an intelligent and responsive user 
          experience. The website's foundation was meticulously crafted using JavaScript, 
          enriched with PHP functions for robust backend operations. By leveraging OpenAI's 
          capabilities, we orchestrated a fleet of 16 specialized machines, 
          each meticulously tailored to fulfill 
          a distinct function within our intricate digital ecosystem.{" "}
        </Link>
        <span>
          {" "}
        </span>
        <Link
          href="https://github.com/Truey95"
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          portfoilio.
        </Link>
      </p>

      
      <ProjectButtonDemo url="https://www.chattyken.com" />
    </div>
  );
}

// projects landing page
export default function LandingPage(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt=""
          className="absolute z-10 object-cover"
          fill
          src={chattykenportfileImg}
        />
        <ProjectHeroText h2="Chatty Ken" h3="PHP, Javascript, OpenAI, Typescript" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <LandingPageTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
