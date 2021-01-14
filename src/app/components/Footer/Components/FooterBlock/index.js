import './index.css';

function FooterBlock({ children, title }) {
    return (
        <div>
            <h2 className="footer-box-title">{title}</h2>
            <div className="contact-details">{children}</div>
        </div>
    );
}

export default FooterBlock;