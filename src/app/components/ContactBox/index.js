import './index.css';

function ContactBox({ children, title }) {
    return (
        <div>
            <h2 className="footer-box-title">{title}</h2>
            <p className="contact-details">{children}</p>
        </div>
    );
}

export default ContactBox;