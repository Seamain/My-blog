import { graphql, useStaticQuery } from "gatsby"

const useLatestPost = () => {
  const articles = useStaticQuery(graphql`
    query {
      directus {
        article(limit: 3, sort: ["-id"]) {
          id
          slug
          title
          tags
          createdDate
          author {
            name
          }
        }
      }
    }
  `).directus.article

  return articles
}

export default useLatestPost
