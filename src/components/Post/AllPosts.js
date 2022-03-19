import React from "react"
import { Link } from "gatsby"
import PostItems from "./PostItems"
import PostItem from "./PostItem"
import useAllBlogPosts from "../../hooks/use-all-blog-post"
import Button from "../Button/Button"

const AllPosts = ({ title, introduction }) => {
    const latestBlogPost = useAllBlogPosts()
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

                <PostItems>
                    {latestBlogPost.map((article, index) => {
                        return <PostItem key={index} article={article} />
                    })}
                </PostItems>
            </div>
        </div>
    )
}

export default AllPosts
