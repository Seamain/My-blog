import * as React from "react"
import { Link } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"

const BlogBannerModule = ({ children, title, subTitle, price, enquire }) => {
    return (
        <>
            <BannerModuleStyles>
                {children ? (
                    children
                ) : (
                    <StaticImage
                        className="banner__image"
                        imgClassName="banner__image--content"
                        src="../../../static/84647109_p0.jpg"
                        alt="Banner Image"
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                )}

                <div className="container">
                    <div className="banner__content">
                        {title && (
                            <h1>
                                {title}
                                <span style={{ color: "var(--primary)" }}>.</span>
                            </h1>
                        )}
                        {subTitle && <h2>{subTitle}</h2>}
                        {price && (
                            <h2 className="price">
                                £{price}
                                <span style={{ color: "var(--primary)" }}>.</span>
                            </h2>
                        )}
                        <div className="banner__btns">
                            {enquire && (
                                <Button
                                    className="btn"
                                    text="Enquire Now"
                                    as={Link}
                                    to="/contact"
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="gradient"></div>
            </BannerModuleStyles>
            <span id="topContent"></span>
        </>
    )
}

export default BlogBannerModule
