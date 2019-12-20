import React from "react"
import { Link } from "gatsby"
import Header from "../components/header";
import Introduction from "../components/introduction";
import About from "../components/about";
import Projects from "../components/projects";
import Education from "../components/education";

const IndexPage = () => (
  <div>
    <Header />
    <Introduction />
    <About />
    <Projects />
    <Education />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
