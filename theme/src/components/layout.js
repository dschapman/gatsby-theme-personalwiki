/** @jsx jsx */
import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container, Footer } from "theme-ui"
import {jsx} from 'theme-ui'
import { graphql, useStaticQuery, Link } from "gatsby"
import ColorSwitcher from "./ColorSwitcher"

const Layout = ({ children}) => {

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Menu/>
      <Main>
      
        <Container>{children}</Container>
      </Main>
      <Footer>
            <div> © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org"> Gatsby</a></div>
      </Footer>
    </StyledLayout>
  )
}

const MenuItem = ({ children, location, to}) => {
  console.log(location)
   return(
    <div sx={{paddingRight: 3,}}><Link to={to} activeStyle={{textDecoration:"underline"}}>{children}</Link></div>
   )
}

function Menu () {
  
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
      <Header>
        <span><div css={css`display:flex;`}><MenuItem to="/">{data.site.siteMetadata.title}</MenuItem><MenuItem to="/about">About</MenuItem><MenuItem to="/canon">Canon</MenuItem></div><ColorSwitcher /></span>
      </Header>
  )
}


export default Layout
