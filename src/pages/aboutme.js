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
ipE/ffp0QG00+Ak=
=XmBy
-----END PGP PUBLIC KEY BLOCK-----
" />
                <BasicTextModule title="My Bilibili" content="https://space.bilibili.com/252931506"
                                 linkText="Go and check it" link="https://space.bilibili.com/252931506"/>
            </Layout>
        </>
    )
}

export default AboutMe
