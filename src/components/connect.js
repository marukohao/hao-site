import React from "react"
import {
  FaHome,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa"
import styled from "styled-components"

const StyledConnect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 180px 0 0 0;
  background: #f5f5f5;
  padding: 5%;
`
const StyledConnectDetail = styled.p`
  line-height: 1.8;
`
const StyledConnectIcon = styled.div`
  line-height: 1.8;
  color: grey;
  font-size: 25px;
`

export default function Connect({ basics }) {
  const { address, email, phone } = basics

  return (
    <StyledConnect>
      <h1>LET'S CONNECT</h1>
      {/* <StyledConnectDetail>
        <FaHome /> {address}
      </StyledConnectDetail> */}
      <StyledConnectDetail>
        <FaRegEnvelope /> {email}
      </StyledConnectDetail>
      <StyledConnectDetail>
        <FaPhone /> {phone}
      </StyledConnectDetail>
      <StyledConnectIcon>
        <a
          href="https://www.linkedin.com/in/hao-wang-175b5b47/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/marukohao?tab=repositories"
          target="_blank"
        >
          <FaGithub />
        </a>
        {/* <a
          href="https://www.facebook.com/profile.php?id=100001378977969"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/marukogena/"
          target="_blank"
        >
          <FaInstagram /> */}
        {/* </a> */}
      </StyledConnectIcon>
    </StyledConnect>
  )
}
