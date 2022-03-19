import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Welcome to My Blog!"
          subTitle="这里是我写文章的地方哦，其他人投稿也是可以的。"
        />
        <LatestPosts
          title="这里就是博客总览啦，写得文章都在下面哦~"
          introduction="不定期更新啦"
        />
      </Layout>
    </>
  )
}

export default Index
