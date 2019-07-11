/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [{
   resolve: 'gatsby-theme-personalwiki',
   options: {
      title: 'My Site',
      author: 'Daniel Chapman',
      description: 'This is a demo site for my gatsby theme.'
   }
  },
]}
