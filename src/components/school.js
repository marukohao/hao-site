import React from "react";
import styled from "styled-components";

const StyledSchool = styled.div`
  color: grey;
  margin: 20px;
`

export default function School({ school }) {

  return (
    <StyledSchool>
      <h3>{school.institution}, {school.location}</h3>
      <h4>{school.startDate}</h4>
      {school.gpa ? (<h4>{school.major}, GPA: {school.gpa}</h4>) : (<h4>{school.major}</h4>)}
      {school.thesis ? (<h4>Thesis: {school.thesis}</h4>) : null}
    </StyledSchool>
  );
}