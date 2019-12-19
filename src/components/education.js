import React from "react";
import educationStyles from "../styles/education.module.css";
import Resume from "../statics/resume.json";


export default function Education() {
  const { education } = Resume;
  console.log(education);
  // const resume = JSON.parse(Resume);
  return (
    <div className={educationStyles.container}>
      <div className={educationStyles.innerContainer}>
        <h1 className={educationStyles.font}>Education</h1>
        <h4 className={educationStyles.font}>Background</h4>
      </div>
      
        {/* {JSON.stringify(education)} */}
        {education.map((school, index) => 
<h5>{school.location}</h5> 
        )}

    </div>
  );
}