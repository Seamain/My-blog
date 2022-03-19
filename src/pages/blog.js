import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import AllPosts from "../components/Post/AllPosts"
import {StaticImage} from "gatsby-plugin-image";
import SimpleBanner from "../components/SimpleBanner/SimpleBanner";



const Blog = () => {
    return (
        <>
            <Seo title="Blog" />
            <Layout>
                <SimpleBanner title="My Blog">
                    <StaticImage
                        className="banner__image"
                        src="../../static/84647109_p0.jpg"
                        alt="Ro&SOPII"
                    />
                </SimpleBanner>
                <AllPosts
                    title="All blog posts from Seamain"
                />
            </Layout>
        </>
    )
}

export default Blog
