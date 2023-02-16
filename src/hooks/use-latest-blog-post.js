import { graphql, useStaticQuery } from "gatsby"

const useLatestPost = () => {
  const articles = useStaticQuery(graphql`
    query articlesLast {
      graphcms {
        articles(orderBy: createdDateTime_DESC, first: 3) {
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

export default useLatestPost
