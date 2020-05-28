import React from "react"
import School from "./school.js"
import styled from "styled-components"

const StyledEducation = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const StyledEducationHeader = styled.div`
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

export default function Education({ education }) {
  return (
    <StyledEducation id="education">
      <StyledSpan></StyledSpan>
      <StyledEducationHeader>
        <h1>EDUCATION</h1>
        <p>What I've Learned</p>
      </StyledEducationHeader>
      <div>
        {education.map((school, index) => {
          return <School school={school} />
        })}
      </div>
    </StyledEducation>
  )
}
