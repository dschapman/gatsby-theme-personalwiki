import React from "react"
import { css, Global } from "@emotion/core"
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
        <span><Link to="/">{data.site.siteMetadata.title}</Link><ColorSwitcher /></span>
      </Header>
      <Main>
      
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  )
}

export default Layout
