import React from "react";
import styled from "styled-components";

const StyledCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: grey;
  margin: 30px;
`

const StyledCompanyDetail = styled.h4`
  line-height: 1.8;
`


export default function Company({ company }) {
  const { name, position, address, startDate, endDate, details } = company;

  return (
    <StyledCompany>
      <h3>{position}</h3>
      <StyledCompanyDetail>{name}, {address}</StyledCompanyDetail>
      <StyledCompanyDetail>{startDate} - {endDate}</StyledCompanyDetail>
      <ul>
        {details.map(detail => <li><StyledCompanyDetail>{detail}</StyledCompanyDetail></li> )}
        </ul>
    </StyledCompany>
        );
}