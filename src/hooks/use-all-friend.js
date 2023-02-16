import { graphql, useStaticQuery } from "gatsby"

const useAllFriend = () => {
  const friends = useStaticQuery(graphql`
    query friends {
      graphcms {
        firends {
          name
          url: link
          bio: about
        }
      }
    }
  `).graphcms.firends

  return friends
}

export default useAllFriend
