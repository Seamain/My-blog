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
    siteUrl: "https://seamain.org",
    developerName: "Morgan Baker Development",
    developerUrl: "https://www.morganbaker.dev",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "graphcms",
        fieldName: "graphcms",
        url: "https://api-ap-northeast-1.hygraph.com/v2/cle4ane6v051f01ulfrynb3jf/master",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seamain's blog`,
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
         {
                  site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
         }
        `,
        feeds: [
          {
            serialize: ({ query: { site, graphcms } }) => {
                return graphcms.articles.reverse().map(article => {
                  return Object.assign({}, {
                    title: article.title,
                    description: article.title,
                    date: article.createdDate,
                    url: encodeURI(`${site.siteMetadata.siteUrl}/blog/${article.slug}`),
                    guid: `${site.siteMetadata.siteUrl}/blog/${article.slug}`,
                    custom_elements: [
                      {
                        "content:encoded": new (require("showdown")).Converter().makeHtml(article.content),
                      }
                    ]
                  })
                })
            },
            query: `
              query feed {
                  graphcms {
                      articles(first: 13, orderBy: createdDateTime_DESC) {
                          title
                          createdDate: createdDateTime
                          slug
                          content
                      }
                  }
              }
            `,
            output: '/rss.xml',
            title: 'Seamain'
          }
        ]
      }
    }
  ],
}
