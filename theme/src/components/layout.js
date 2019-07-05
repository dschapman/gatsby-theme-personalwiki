import React from "react"
import { css, Global } from "@emotion/core"
import styled from "@emotion/styled"
import { Layout as StyledLayout, Header, Main, Container } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import ColorSwitcher from "./ColorSwitcher"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header>
        <span><div css={css`display:flex;`}><MenuItem><Link to="/">{data.site.siteMetadata.title}</Link></MenuItem><MenuItem>About</MenuItem><MenuItem>Canon</MenuItem></div><ColorSwitcher /></span>
      </Header>
      <Main>
      
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  )
}

const MenuItem = styled.div(
  `
    padding-right:2rem;
  `
)


export default Layout
