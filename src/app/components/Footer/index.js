import FooterBlock from "./Components/FooterBlock";
import Link from "../Link";
import './index.css';
import translations from "../../translations.js";

function Footer() {
    return (
        <footer className="footer">

            {translations.en.footerBlock.map(({ title, items }) => {
                return <FooterBlock title={title}>
                    {items.map(({ href, text }) => {
                        const Component = href ? Link : "p";

                        return <Component href={href}>{text}</Component>
                    })
                }
                </FooterBlock>
            })}

        </footer>
    )
}

export default Footer;