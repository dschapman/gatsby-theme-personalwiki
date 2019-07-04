module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Jam Personal Wiki",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-emotion", 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
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
