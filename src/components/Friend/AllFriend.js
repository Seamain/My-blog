import React from "react"
import { Link } from "gatsby"
import FriendItems from "./FriendItems"
import FriendItem from "./FriendItem"
import Button from "../Button/Button"
import useAllFriend from "../../hooks/use-all-friend";

const AllFriend = ({ title, introduction }) => {
    const allFriends = useAllFriend()
    return (
        <div className="section">
            <div className="container container__tight">
                {title ? (
                    <div className="intro__area">
                        {title && (
                            <h2>
                                {title}
                                <span>.</span>
                            </h2>
                        )}
                        {introduction && <p>{introduction}</p>}
                    </div>
                ) : null}

                <FriendItems>
                    {allFriends.map((friend, index) => {
                        return <FriendItem key={index} friend={friend} />
                    })}
                </FriendItems>
            </div>
        </div>
    )
}

export default AllFriend
