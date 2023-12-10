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
  "React",
  "Netlify",
  "TypeScript",
  "Prop Types",
  "Styled Components",
  "Router",
  "TMDB API",
] as const;

// body of text found in project pages
function MovieDatabaseTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
      As I embark on the task of managing my Passhub PHP application within the cPanel 
      environment, I meticulously establish a secure database using 
      the MySQL Database Wizard, carefully assigning user privileges for 
      enhanced security. I proceed to upload the application files via 
      the cPanel File Manager or an FTP client, ensuring file permissions 
      are correctly set to safeguard against unauthorized access. 
      To boost the application's capabilities, I employ EasyApache to
       install necessary PHP extensions, and I automate routine maintenance tasks
      like database backups by setting up cron jobs. I prioritize security by 
      installing an SSL certificate through cPanel's SSL/TLS Manager and by 
      configuring .htaccess for additional protective measures such as IP whitelisting. 
      By utilizing cPanel's comprehensive tools, I adeptly manage and maintain a secure, 
      efficient, and user-friendly Passhub PHP application, ensuring reliable password 
      management for users.{" "}
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

      <ProjectButtonCode url="https://github.com/milliorn/Movie-Database" />
      <ProjectButtonDemo url="https://reactjs-movie-database.netlify.app/" />
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
          src={movieDatabaseImg}
        />
        <ProjectHeroText h2="Movie Database" h3="React, TypeScript, Netlify" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <MovieDatabaseTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
