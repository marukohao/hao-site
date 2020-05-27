import React from "react"
import styled from "styled-components"

const StyledSkill = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const StyledSkillHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
`

const StyledSkillContent = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 450px;
    width: 100%;
  }
`

const StyledSkillColumn = styled.div`
  background: #f5f5f5;
  box-shadow: 2px 1px grey 1px;
  text-align: center;
  padding: 0 0 15px 0;
  color: grey;
  @media (min-width: 768px) {
    width: 32%;
    height: 450px;
  }
`

const StyledSpan = styled.span`
  display: block;
  height: 64px; /*same height as header*/
  margin-top: -64px; /*same height as header*/
  visibility: hidden;
`

export default function Skill({ skills }) {
  const { Languages, Frameworks, Tools } = skills

  return (
    <StyledSkill id="skills">
      <StyledSpan></StyledSpan>
      <StyledSkillHeader>
        <h1>MY SKILLS</h1>
        <p>What I Do</p>
      </StyledSkillHeader>
      <StyledSkillContent>
        <StyledSkillColumn>
          <img src="https://images.unsplash.com/photo-1457276587196-a9d53d84c58b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"></img>
          <h3>Languages</h3>
          <p>{Languages}</p>
        </StyledSkillColumn>
        <StyledSkillColumn>
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"></img>
          <h3>Frameworks</h3>
          <p>{Frameworks}</p>
        </StyledSkillColumn>
        <StyledSkillColumn>
          <img src="https://images.unsplash.com/photo-1434989407504-46a53b1b8a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>
          <h3>Tools</h3>
          <p>{Tools}</p>
        </StyledSkillColumn>
      </StyledSkillContent>
    </StyledSkill>
  )
}
