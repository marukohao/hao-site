import React from "react"
import Project from "./project.js"
import styled from "styled-components"

const StyledProjects = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const StyledProjectsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
`

const StyledSpan = styled.span`
  display: block;
  height: 64px; /*same height as header*/
  margin-top: -64px; /*same height as header*/
  visibility: hidden;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export default function Projects({ projects }) {
  return (
    <StyledProjects id="projects">
      <StyledSpan></StyledSpan>
      <StyledProjectsHeader>
        <h1>MY PROJECTS</h1>
        <p>What I've Done</p>
      </StyledProjectsHeader>
      <div>
        {projects.map((project, index) => {
          return <Project project={project} />
        })}
      </div>
    </StyledProjects>
  )
}
