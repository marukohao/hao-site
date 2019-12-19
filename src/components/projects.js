import React from "react";
import projectsStyles from "../styles/projects.module.css";
import { graphql } from "gatsby";
import Image from "./image"

export default function Projects({ data }) {

  return (
    <div className={projectsStyles.container}>
      <div className={projectsStyles.innerContainer}>
        <h1 className={projectsStyles.font}>MY PROJECTS</h1>
        <h4 className={projectsStyles.font}>What I've Done</h4>
      </div>
      <div className={projectsStyles.projectContainer}>
        <div className={projectsStyles.detail}>
          <h2 className={projectsStyles.font}>CUTE-CUTE</h2>
          <h5 className={projectsStyles.font}> A children’s game that allows users to create rooms and add stickers in each room
</h5>
          <a href="https://github.com/marukohao/food-buddy-web" target="_blank"><button className={projectsStyles.font, projectsStyles.link}>Git Repo</button></a>
          <a href="https://marukohao.github.io/cute-cute-frontend/" target="_blank"><button className={projectsStyles.font, projectsStyles.link}>Depolyed Website</button></a>
        </div>
        <div className={projectsStyles.detail}>
          <Image />
        </div>
      </div>
    </div>
  );
}
