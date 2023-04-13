import { About } from "src/Components/About/About";
import Footer from "src/Components/Footer/Footer";
import Header from "src/Components/Header/Header";
import Projects from "src/Components/Projects/Projects";
import Skills from "src/Components/Skills/Skills";
import client from "src/sanity";
import Aos from 'aos'
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Head from "next/head";
import Navbar from "src/Components/NavBar/NavBar";
import SocialMedia from "src/Components/SocialMedia/SocialMedia";


export default function Home({
  header,
  social,
  about,
  skills,
  projects,
  footer,
}) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>

      <SocialMedia social={social} />
      <Navbar />
      <Header header={header} social={social} />
      <Head>
        <title>Mizael Douglas Developer</title>
      </Head>
      <main>
        <About about={about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Footer footer={footer} />
      </main>
    </>
  )
}


export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const social = await client.fetch(`*[_type == "social"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const skills = await client.fetch(`*[_type == "skills"][0]`);
  const projects = await client.fetch(`*[_type == "projects"][0]`);
  const footer = await client.fetch(`*[_type == "footer"][0]`);

  return {
    props: {
      header,
      social,
      about,
      skills,
      projects,
      footer,
    },
  };
};