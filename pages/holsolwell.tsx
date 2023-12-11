import Image from "next/image";
import Link from "next/link";

import holsolwellcoverImg from "../public/assets/projects/holsolwellcover.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "JavaScript",
  "ThreeJs"
] as const;

// body of text found in project pages
function DictionaryTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        I experimented with a few frontend CSS frameworks. This is the result of
        one of those occasions using Material-UI. Using this framework I built
        my first project with a Light-Dark mode toggle.{" "}
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
          src={holsolwellcoverImg}
        />
        <ProjectHeroText h2="Hol Sol Wellness" h3="Wordpress, Divi, Threejs, Ecwid" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <DictionaryTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
