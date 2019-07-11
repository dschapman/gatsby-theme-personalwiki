module.exports = options => {
  return {
  siteMetadata: {
    title: "[Blog Title]",
    author: "[Author Name]",
    description: "[Description]",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-emotion", 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: options.blogPath || `content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `canon`
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/templates/blog-post-layout.js"),
        },
      }
    },

],
}
}