import * as React from "react"
import Button from "../Button/Button"
import { PostItemStyles } from "./FriendStyle"

const FriendItem = (friend) => {
  const { name, url, bio } = friend.friend

  return (
    <PostItemStyles to={url}>
      <h4>{name}</h4>
      <div className="blogitem__meta">
        <Button as="span" text="See this website" arrow={true} />
        <p>{bio}</p>
      </div>
    </PostItemStyles>
  )
}

export default FriendItem
