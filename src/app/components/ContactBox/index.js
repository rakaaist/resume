import './index.css';

function ContactBox({ children, title }) {
    return (
        <div>
            <h2 className="footer-box-title">{title}</h2>
            <div>{children}</div>
        </div>
    );
}

export default ContactBox;