module.exports = {
  siteMetadata: {
    title: `Leon Kyse`,
    description: `Leon Kyse es una empresa familiar dedicada a la fabricación de cuchillería a través de artesanos de todo Paraguay.`,
    author: `https://webpy.xyz`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-source-datocms',
      options:{
        apiToken: '10c97cc8a08cdc5a441e728f34a4ce'
      }
    }
  ],
}
