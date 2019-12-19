import React, { useState } from "react";
import introductionStyles from "../styles/introduction.module.css";
import Resume from "../statics/resume.json";


export default function Introduction() {

  return (
    <div className={introductionStyles.container}>
        <img src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"></img>
  <h1 className={introductionStyles.font}>{Resume.basics.firstName} - {Resume.basics.label}</h1>
    </div>
  );
}