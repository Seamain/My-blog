const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === `MarkdownRemark`) {
//         const slug = createFilePath({ node, getNode, basePath: `pages` })
//         createNodeField({
//             node,
//             name: `slug`,
//             value: slug,
//         })
//     }
// }
//
// exports.createPages = async ({ graphql, actions }) => {
//     // **Note:** The graphql function call returns a Promise
//     // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//     const {createPage} = actions
//     const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//     result.data.allMarkdownRemark.edges.forEach(({node}) => {
//         createPage({
//             path: node.fields.slug,
//             component: path.resolve(`./src/templates/blog-post.js`),
//             context: {
//                 // Data passed to context is available
//                 // in page queries as GraphQL variables.
//                 slug: node.fields.slug
//             },
//         })
//     })
// }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


    const articles = (
        await graphql(`
            query createArticle {
                graphcms {
                    articles(first: 100) {
                        id
                        slug
                    }
                }
            }
        `)
    ).data.graphcms.articles

    for (const article of articles) {

        console.log(`${article.slug} 已被创建`)

        createPage({
            path: `/blog/${article.slug}`,
            component: path.resolve('./src/templates/post-template.js'),
            context: {
                id: article.id
            }
        })

        await delay(500)
    }
}