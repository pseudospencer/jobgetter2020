import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 50px;
  }
`

const FooterAuthor = styled("div")`
  a {
    text-decoration: none;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

    &:hover {
      color: ${colors.blue900};
    }
  }
`

const Footer = () => (
  <FooterContainer>
    <FooterAuthor>
      <Link to="/">Spencer James</Link>
    </FooterAuthor>
  </FooterContainer>
)

export default Footer
