/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Seamain",
    description: "哇偶",
    author: "Seamain&Jimmy",
    twitterUsername: "barcadia",
    facebookUsername: "barcadia",
    instagramUsername: "barcadia",
    linkedinUsername: "morgan-baker-development",
    image: "/macbook-color.jpg",
    siteUrl: "https://seamain.studio",
    developerName: "Morgan Baker Development",
    developerUrl: "https://www.morganbaker.dev",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Directus",
        fieldName: "directus",
        url: "https://t3tmqp0w.directus.app/graphql",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seamain Studio`,
        short_name: `Seamain`,
        start_url: `/`,
        background_color: `#6e83ce`,
        theme_color: `#3742bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
