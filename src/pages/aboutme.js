import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import BasicCodeModule from "../components/BasicTextModule/BasicCodeModule";
import {StaticImage} from "gatsby-plugin-image";
import SimpleBanner from "../components/SimpleBanner/SimpleBanner";

const AboutMe = () => {
    return (
        <>
            <Seo title="About" />
            <Layout>
                <SimpleBanner title="About me~">
                    <StaticImage
                        className="banner__image"
                        src="../../static/PARQUET_screenshot 2021_12_11 18_50_21.jpg"
                        alt="PARQUET"
                    />
                </SimpleBanner>
                <BasicTextModule title="Email" content="quanminjun37@gmail.com" />
                <BasicCodeModule
                    title="publickey" content="
                    -----BEGIN PGP PUBLIC KEY BLOCK-----
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
Ss/6WpsLGNNV1U4H
=jujE
-----END PGP PUBLIC KEY BLOCK-----" />
                <BasicTextModule title="My Bilibili" content="https://space.bilibili.com/252931506"
                                 linkText="Go and check it" link="https://space.bilibili.com/252931506"/>
            </Layout>
        </>
    )
}

export default AboutMe
