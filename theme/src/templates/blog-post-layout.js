// src/components/blog-post-layout.js
import React from 'react'
import Layout from '../components/layout'
import { Styled } from "theme-ui"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

function BlogPostLayout({ data }) {
  const { title, author, date } = data.mdx.frontmatter
  return (
    <Layout>
      <article>
        <header>
          <Styled.h1>{title}</Styled.h1>
          <span>Author: {author}</span>
          <time>Date: {date}</time>
        </header>
        
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        author
        date
      }
      body
    }
  }`

export default BlogPostLayout