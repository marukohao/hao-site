import React from "react";
import aboutStyles from "../styles/about.module.css";
import Resume from "../statics/resume.json";

export default function About() {

  return (
    <div className={aboutStyles.container}>
        <div className={aboutStyles.innerContainer} id={aboutStyles.words}>
            <h1 className={aboutStyles.font}>ABOUT</h1>
            <h5 className={aboutStyles.font}>{Resume.basics.about}</h5>
        </div>
        <div className={aboutStyles.innerContainer}>
            <img className={aboutStyles.picture} src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2261&q=80"></img>
        </div>
    </div>
  );
}