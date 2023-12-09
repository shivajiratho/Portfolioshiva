import ProjectItem from "./ProjectItem";

import currentWeatherImg from "../../public/assets/projects/current-weather.png";
import holsolwellcoverImg from "../../public/assets/projects/holsolwellcover.png";
import uvmgallerycoverImg from "../../public/assets/projects/uvmgallerycover.png";
import movieDatabaseImg from "../../public/assets/projects/movie-database.png";
import StarlocoverImg from "../../public/assets/projects/Starlocover.png";
import chattykenportfileImg from "../../public/assets/projects/chattykenportfile.png";
import AmistadcityImg from "../../public/assets/projects/Amistadcity.png";
import travelAgencyImg from "../../public/assets/projects/travel-agency.png";


// holds all project items in projects
function ProjectsContainer(): JSX.Element {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <ProjectItem
        backgroundImg={travelAgencyImg}
        projectUrl="/landing-pages"
        tech="React, TypeScript, Tailwind CSS"
        title="Landing Pages"
      />

      <ProjectItem
        backgroundImg={movieDatabaseImg}
        projectUrl="/movie-database"
        tech="React, Typescript, Netlify"
        title="Movie Database"
      />

      <ProjectItem
        backgroundImg={currentWeatherImg}
        projectUrl="/weather"
        tech="React, Tailwind CSS"
        title="Current Weather"
      />

      <ProjectItem
        backgroundImg={holsolwellcoverImg}
        projectUrl="/dictionary"
        tech="Ecwid, Wordpress, Divi, Threejs"
        title="Hol Soul Wellness"
      />

      <ProjectItem
        backgroundImg={uvmgallerycoverImg}
        projectUrl="/recipes"
        tech="Divi Builder, Wordpress, Cpanel, Ecwid"
        title="Upscale Vision Media"
      />

      <ProjectItem
        backgroundImg={AmistadcityImg}
        projectUrl="/open-ai"
        tech="Wordpress, Divi, Elementor, Revslider, Cpanel"
        title="Amistad City Festival"
      />

      <ProjectItem
        backgroundImg={StarlocoverImg}
        projectUrl="/open-ai"
        tech="NodeJS, Tailwind, PHP, Javascript"
        title="Starlo Music & Video Streaming"
      />
      
      <ProjectItem
        backgroundImg={chattykenportfileImg}
        projectUrl="/open-ai"
        tech="OpenAI, NodeJS, Javascript, PHP"
        title="Chatty Ken AI"
      />

    </div>
  );
}

// projects component
export default function Projects(): JSX.Element {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-7xl mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-indigo-600 text-center xl:text-start pt-12 lg:pt-64">
          Projects
        </p>
        <h2 className="py-4 text-center xl:text-start">
          Projects I loved Developing
        </h2>
        <ProjectsContainer />
      </div>
    </div>
  );
}
