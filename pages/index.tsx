import Head from "next/head";
import { Inter } from "@next/font/google";

import About from "../components/About";
import Contact from "../components/contacts/Contact";
import Hero from "../components/heros/Hero";
import Projects from "../components/project/Projects";
import Skills from "../components/skill/Skills";

const inter = Inter({ subsets: ["latin"] });

// home page
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My Developer Portfolio site, Ricky Rollins
          "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Ricky Rollins Portfolio</title>
      </Head>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
