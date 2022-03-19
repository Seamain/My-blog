import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPost = () => {
  const articles = useStaticQuery(graphql`
    query {
      directus {
        article(sort: ["-id"]) {
          id
          slug
          title
          tags
          createdDate
        }
      }
    }
  `).directus.article

  return articles
}

export default useAllBlogPost
