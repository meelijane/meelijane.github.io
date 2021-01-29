/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
  siteMetadata: {
    title: 'Milly Schmidt - personal website',
    description: 'Boring personal website for Milly Schmidt',
    author: 'Milly Schmidt'
  }
}
