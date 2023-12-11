import Image from "next/image";
import Link from "next/link";

import nikemockupImg from "../public/assets/projects/nikemockup.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "Hyper 3D",
  "JavaScript",
] as const;

// body of text found in project pages
function WeatherTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        My favorite and personally most useful app, I created this app to
        address some features I find lacking in other apps. I can now check the
        weather reported from thousands of cities worldwide using{" "}
        <Link
          href=
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          {" "}
        </Link>
        <span>
         {" "}
        </span>
        <Link
          href=
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          {" "}
        </Link>
        <span>
          
        </span>
      </p>
      <ProjectButtonCode url="https://github.com/milliorn/Current-Weather" />
      <ProjectButtonDemo url="https://milliorn.github.io/Current-Weather/" />
    </div>
  );
}

// weather page
export default function Weather(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={nikemockupImg}
        />
        <ProjectHeroText
          h2="Nike Mock Up"
          h3="Wordpress, JavaScript, Hyper 3D"
        />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <WeatherTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
