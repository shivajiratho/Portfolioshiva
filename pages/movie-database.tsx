import Image from "next/image";
import Link from "next/link";

import passhubcoverImg from "../public/assets/projects/passhubcover.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "Javascript",
  "PHP",
  "TypeScript",
] as const;

// body of text found in project pages
function MovieDatabaseTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        {" "}
        <Link
          href="https://reactjs.org/docs/components-and-props.html"
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          here.{" "}
        </Link>
        <span>
          Custom hooks are used here along with useEffect, including use of
          State. This site is made possible with{" "}
        </span>
        <Link
          href="https://www.themoviedb.org/"
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          The Movie Database API.{" "}
        </Link>
      </p>

      <ProjectButtonCode url="https://github.com/Truey95/PassHub" />
      <ProjectButtonDemo url="https://passhub.trevors.tsiacademy.org/auth" />
    </div>
  );
}

// movie database page
export default function MovieDatabase(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={passhubcoverImg}
        />
        <ProjectHeroText h2="Pass Hub" h3="Javascript, Wordpress, PHP, Typescript" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <MovieDatabaseTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
