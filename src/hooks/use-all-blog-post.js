import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPost = () => {
  const articles = useStaticQuery(graphql`
    query articles {
      graphcms {
        articles(orderBy: createdDateTime_DESC) {
          id
          slug
          title
          tags
          createdDate: createdDateTime
          authors {
            name
          }
        }
      }
    }
  `).graphcms.articles

  return articles
}

export default useAllBlogPost
