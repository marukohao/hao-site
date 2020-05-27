import React, { useState } from "react"
import styled from "styled-components"
import HamburgerMenu from "../HamburgerMenu"

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
  @media (min-width: 768px) {
    background-color: white;
    width: 90%;
    padding: 22px;
  }
`
const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: calc(100% - 64px);
  top: 64px;
  background-color: white;
  opacity: 1;
  font-color: black;
  z-index: 999;

  & a {
    padding: 24px;
  }
`

export default function Header() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  const changeSection = () => {
    setOpen(false)
  }

  return (
    <StyledHeader id="home">
      {open ? (
        <StyledMenuContainer>
          <a href="#home" onClick={changeSection}>
            <h3>Home</h3>
          </a>
          <a href="#about" onClick={changeSection}>
            <h4>About Me</h4>
          </a>
          <a href="#projects" onClick={changeSection}>
            <h4>Projects</h4>
          </a>
          <a href="#skills" onClick={changeSection}>
            <h4>Skills</h4>
          </a>
          <a href="#education" onClick={changeSection}>
            <h4>Education</h4>
          </a>
          <a href="#experience" onClick={changeSection}>
            <h4>Experience</h4>
          </a>
          <a
            href="https://docs.google.com/document/d/1IXG1o22jLfUmRExV8p8Tt7XbWUIALsxd/edit#heading=h.gjdgxs"
            onClick={changeSection}
            target="_blank"
          >
            <h4>Resume</h4>
          </a>
        </StyledMenuContainer>
      ) : null}
      <h3>HAO WANG</h3>
      {/* <StyledHeaderNav> */}
      <HamburgerMenu
        isOpen={open}
        menuClicked={handleClick}
        width={24}
        height={16}
        strokeWidth={1.5}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
      {/* <h5>Home</h5>
        <h5>About Me</h5>
        <h5>Projects</h5>
        <h5>Education</h5>
        <h5>Experience</h5>
      </StyledHeaderNav> */}
    </StyledHeader>
  )
}
