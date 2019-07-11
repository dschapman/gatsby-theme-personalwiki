import React from "react"
import { Styled } from "theme-ui"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"


function IndexPage({ data }) {
    return (
    <Layout>
      <Styled.h1>Recent Posts</Styled.h1>
    {data.allMdx.edges.map(({ node }) => {
        const { title, author, date } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <Styled.h2>{title}</Styled.h2>
              <div>Posted By {author} on {date}</div>
            </header>
            <p>{node.excerpt}</p>
            <Styled.a as={Link} to={node.fields.slug}>View Article</Styled.a>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
            date
          }
        }
      }
    }
  }`