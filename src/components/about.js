import React from "react"
import styled from "styled-components"

const StyledAbout = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // position: relative;
  }
`
const StyledAboutContent = styled.div`
  background: #cfe4e6;
  padding: 35px;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const StyledAboutImage = styled.img`

  @media (min-width: 768px) {
    width: 50%;
    margin-left: 20px;
    // height: 100%;
  }
`
const StyledAboutDetails = styled.p`
  padding-top: 10px;

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

export default function About({ basics }) {
  const { about } = basics
  return (
    <StyledAbout id="about">
      <StyledSpan></StyledSpan>
      <StyledAboutContent>
        <h2>ABOUT</h2>
        <StyledAboutDetails>{about}</StyledAboutDetails>
      </StyledAboutContent>
      <StyledAboutImage src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2261&q=80" />
    </StyledAbout>
  )
}
