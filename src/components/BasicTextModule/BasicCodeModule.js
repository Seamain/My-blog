import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicCodeModule = ({ title, content, link, linkText }) => {
    return (
        <BasicTextModuleStyles className="section">
            <div className="container container__tight">
                <div>
                    {title && <h2>{title}</h2>}
                    {content && <pre style={{ marginBottom: "60px" }}>{content}</pre>}

                    <Button text={linkText} as={Link} to={link} />
                </div>
            </div>
        </BasicTextModuleStyles>
    )
}

export default BasicCodeModule
