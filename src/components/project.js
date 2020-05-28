import React, { useState } from "react"
import Image from "./image"
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const StyledProject = styled.div`
  margin: 30px 15px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`
const StyledProjectDetail = styled.div`
  @media (min-width: 768px) {
    width: 45%;
  }
`

const StyledProjectLink = styled.button`
  padding: 4px;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  margin: 15px 0;
  font-size: 15px;
  color: grey;
`
const StyledProjectSpan = styled.span`
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
`

export default function Projects({ data, project }) {
  const [detail, setDetail] = useState(false)
  const { images } = project

  let handleClick = () => {
    console.log("clicked")
    setDetail(!detail)
  }

  return (
    <StyledProject>
      <StyledProjectDetail>
        <h2>{project.name}</h2>
        <p>
          {project.description} -{" "}
          {detail ? (
            <StyledProjectSpan onClick={handleClick}>hide</StyledProjectSpan>
          ) : (
            <StyledProjectSpan onClick={handleClick}>
              see more
            </StyledProjectSpan>
          )}
        </p>

        {detail
          ? project.detail.map(detail => (
              <li>
                <ul>{detail}</ul>
              </li>
            ))
          : null}
        <a href="https://github.com/marukohao/food-buddy-web" target="_blank">
          <StyledProjectLink>Git Repo</StyledProjectLink>
        </a>
        <a
          href="https://marukohao.github.io/cute-cute-frontend/"
          target="_blank"
        >
          <StyledProjectLink>Depolyed Website</StyledProjectLink>
        </a>
      </StyledProjectDetail>
      <StyledProjectDetail>
        <Carousel>
          <div>
            <img src={require("../images/cute-cute1.png")} />
          </div>
          <div>
            <img src={require("../images/cute-cute2.png")} />
          </div>
          <div>
            <img src={require("../images/cute-cute3.png")} />
          </div>
          {/* {images.map(image => (
            <div>
              <img src={require("../images/cute-cute1.png")} />
            </div>
          ))} */}
        </Carousel>
        {/* <img src={require("../images/cute-cute1.png")}></img> */}
      </StyledProjectDetail>
    </StyledProject>
  )
}
