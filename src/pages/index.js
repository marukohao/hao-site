import React from "react";
import Header from "../components/header";
import Introduction from "../components/introduction";
import About from "../components/about";
import Projects from "../components/projects";
import Skill from "../components/skill";
import Education from "../components/education";
import Work from "../components/work";
import Connect from "../components/connect";
import Resume from "../statics/resume.json";

const { basics } = Resume;
const { education } = Resume;
const { skills } = Resume;
const { work } = Resume;
const { projects } = Resume;
const IndexPage = () => (

  <div>
    <Header />
    <Introduction basics={basics}/>
    <About basics={basics}/>
    <Projects projects={projects}/>
    <Skill skills={skills}/>
    <Education education={education}/>
    <Work work={work}/>
    <Connect basics={basics}/>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
