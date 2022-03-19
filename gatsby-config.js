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
  ],
}
