import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Post/PostStyles"
import LatestPosts from "../components/Post/LatestPosts"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown";

const PostTemplate = ({data}) => {
    const post = data.directus.article_by_id

    const createdAt = new Date(post.createdDate).toDateString()

    return (
    <>
      <Layout>
          <section>
              <PostSingleStyles>
                  {post.title && <h1 className="blogsingle__title">{post.title}</h1>}
                  {createdAt && (
                      <p className="blogsingle__date">Posted on {createdAt}</p>
                  )}
                  {post.author.name && (
                      <p className="blogsingle__date">Author is {post.author.name}</p>
                  )}
                  {post.content && (
                      <article className="blogsingle__content">
                          <ReactMarkdown>{post.content}</ReactMarkdown>
                          <div className="blogsingle__back">
                              <Button to="/blog" text="Back to blogs" as={Link} />
                          </div>
                      </article>
                  )}
              </PostSingleStyles>
          </section>
          <LatestPosts title="还可以阅读以下文章，所有文章的最终解释权会文章作者所有" />
      </Layout>
    </>
  )
}

export const query = graphql`
    query($id: ID!){
        directus {
            article_by_id(id: $id) {
                title
                tags
                content
                createdDate
                author {
                    name
                }
            }
        }
    }
`

export default PostTemplate
