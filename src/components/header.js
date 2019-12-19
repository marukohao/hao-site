import React, { useState } from "react";
import headerStyles from "../styles/header.module.css";


export default function Header() {
  const [logout, setLogout] = useState(false);

  // const handleClick = () => {
  //   localStorage.setItem("jwt", null);
  //   localStorage.setItem("data", null);
  //   setLogout(true);
  // };

  return (
    <div className={headerStyles.container}>
      <h3 className={headerStyles.font}>Hao</h3>
      <div className={headerStyles.innerContainer}>
        <h5 className={headerStyles.font}>Home</h5>
        <h5 className={headerStyles.font}>About Me</h5>
        <h5 className={headerStyles.font}>Projects</h5>
        <h5 className={headerStyles.font}>Education</h5>
        <h5 className={headerStyles.font}>Experience</h5>
      </div>      
    </div>
  );
}
