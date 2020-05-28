import React from "react"
import Company from "./company.js"
import styled from "styled-components"

const StyledWork = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const StyledWorkHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
`
const StyledWorkContent = styled.div`
  // @media (min-width:768px) {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   // height: 450px;
  //   width: 100%;
  // }
`
const StyledWorkColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    // width: 50%;
  }
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

export default function Work({ work }) {
  return (
    <StyledWork id="experience">
      <StyledSpan></StyledSpan>
      <StyledWorkHeader>
        <h1>EXPERIENCE</h1>
        <p>Background</p>
      </StyledWorkHeader>
      <StyledWorkContent>
        <StyledWorkColumn>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"></img>
        </StyledWorkColumn>
        <StyledWorkColumn>
          {work.map((company, index) => {
            return <Company company={company} />
          })}
        </StyledWorkColumn>
      </StyledWorkContent>
    </StyledWork>
  )
}
