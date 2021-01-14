import FooterBlock from "./Components/FooterBlock";
import Link from "../Link";
import './index.css';

function Footer() {
    return (
        <footer className="footer">
            <FooterBlock title="Address">
                <p>Jonazoliu st. 9-30, Vilnius</p>
            </FooterBlock>
            <FooterBlock title="Contacts">
                <Link href="tel:+37060000123">+37063612218</Link>
                <Link href="mailto: rakaaist@gmail.com">rakaaist@gmail.com</Link>
            </FooterBlock>
            <FooterBlock title="Social">
                <Link href="https://lt.linkedin.com/">LINKEDIN/rakaaist</Link>
            </FooterBlock>
        </footer>
    )
}

export default Footer;