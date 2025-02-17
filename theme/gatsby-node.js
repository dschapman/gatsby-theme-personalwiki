const path = require(`path`)
const fs = require('fs');
const mkdirp = require('mkdirp');
const { createFilePath } = require('gatsby-source-filesystem')

//onPreBootstrap hook initializes directories that the theme relies on
exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState()

  blogPath = options.blogPath || `content/posts`
  assetPath = options.assetPath || `content/assets`
  contentPath = `content`

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, blogPath),
    path.join(program.directory, assetPath),
    path.join(program.directory, "src/pages"),
  ]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all blogs and get their slug
exports.onCreateNode = ({ node, actions, getNode }, options) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    console.log("Found an MDX node!")
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: 'slug',
      // Generated value based on filepath with "blog" prefix
      value: `/blog${value}`
    })
  }
  if (node.internal.type === 'Canon') {
    console.log("Found a YML node")
  }
}


exports.createPages = ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    author
                    date
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        // We'll call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: require.resolve(`./src/templates/blog-post-layout.js`),
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id },
          })
        })
      })
    )
  })
}

