import { NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import data from "../data.json";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
                      overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Rahul Tiwari</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/rt-logo.png" />
      </Head>

      <Header socials={data.socials} />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About about={data.about} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={data.experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={data.skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={data.projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe contact={data.contact} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src={data.hero.imagePath}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
