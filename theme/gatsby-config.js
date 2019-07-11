module.exports = ({blogDir='content/posts', assetDir='content/assets', title='[Site]', author='[Author Name]', description='[Description]'}) => {
  return {
  siteMetadata: {
    title: title,
    author: author,
    description: description,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-emotion", 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: blogDir,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: assetDir,
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