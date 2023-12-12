import Image from "next/image";

import nikemockupImg from "../public/assets/projects/nikemockup.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = ["JavaScript", "Wordpress", "Divi", "Hyper3D"];

// body of text found in project pages
function OpenAiTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        I been wanting to learn more about NodeJs, along with ExpressJs. I used
        them to create my first web service hosted on Render. This site will
        generate images from user input using OpenAi API. Backend was scaffold
        using ExpressJs.
      </p>

      <ProjectButtonCode url="" />
      <ProjectButtonDemo url="https://trevors.tsiacademy.org/capstone/week1/WordPress-master/" />
    </div>
  );
}

// open ai page
export default function OpenAi(): JSX.Element {
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
          h2="Nike Jordan Mock Up"
          h3="Wordpress, Hyper3D, JavaScript, Divi"
        />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <OpenAiTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
