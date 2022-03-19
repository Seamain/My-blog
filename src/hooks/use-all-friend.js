import { graphql, useStaticQuery } from "gatsby"

const useAllFriend = () => {
  const friends = useStaticQuery(graphql`
    query {
      directus {
        Friend {
          name
          url
          bio
        }
      }
    }
  `).directus.Friend

  return friends
}

export default useAllFriend
