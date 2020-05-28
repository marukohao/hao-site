import React, { useState } from "react"
import styled from "styled-components"

const StyledIntroduction = styled.div`
  position: relative;
  text-align: center;
  color: white;
  margin: 0;
  margin-top: 64px;
`
const StyledIntroductionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const StyledIntroductionContent = styled.h1`
  padding: 10px;
  font-size: 30px;
  color: black;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`

const StyledIntroductionImage = styled.img`
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`

export default function Introduction({ basics }) {
  const { label } = basics

  return (
    <StyledIntroduction id="home">
      <StyledIntroductionImage src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"></StyledIntroductionImage>
      <StyledIntroductionContainer>
        <StyledIntroductionContent>{label}</StyledIntroductionContent>
      </StyledIntroductionContainer>
    </StyledIntroduction>
  )
}
