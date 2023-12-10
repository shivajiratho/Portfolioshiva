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
      As a developer embarking on the task of managing a Passhub PHP application within a cPanel hosting environment, I start by laying the groundwork for the application's database. I use cPanel's MySQL Database Wizard to create a new database, carefully assigning a user with specific privileges to ensure tight security and efficient operation.

Once the database is ready, I upload the PHP application files to my hosting space. I can choose between using cPanel's built-in File Manager for direct uploads or an FTP client for a more familiar file transfer process. I pay close attention to setting the correct file permissions to secure the application files against unauthorized access.

To optimize the application's performance, I use cPanel's EasyApache to install any necessary PHP extensions that my Passhub application requires. These might include cryptographic extensions for data encryption, which are crucial for the security aspect of the application.

I also set up automated tasks using cPanel's Cron Job feature. By scheduling routine tasks like database backups and maintenance scripts, I ensure the ongoing reliability and efficiency of the Passhub application without the need for manual upkeep.

Security is paramount, so I utilize cPanel's SSL/TLS Manager to install an SSL certificate, encrypting all communication to and from the Passhub application. Additionally, I configure custom security rules through the .htaccess file, such as setting up IP whitelists or implementing directory password protections, to fortify the application's defenses.

In managing my Passhub PHP application through cPanel, I leverage a suite of powerful tools to maintain a secure, high-performing, and user-friendly password management system.{" "}
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
