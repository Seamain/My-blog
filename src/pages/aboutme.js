import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";

const AboutMe = () => {
    return (
        <>
            <Seo title="About" />
            <Layout>
                <BannerModule
                    title="About me"
                    subTitle="这里是我写文章的地方哦，其他人投稿也是可以的。"
                />
                <BasicTextModule title="A title" content="A content" />
            </Layout>
        </>
    )
}

export default AboutMe
