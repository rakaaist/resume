import './index.css';

function Link({ href, imgSrc = "", imgAlt = "", children }) {

    return (
        <a className="social-item" href={href} target="_blank" rel="noreferrer">
            {imgSrc && <img className="ellipse" src={imgSrc} alt={imgAlt}></img>}
            {children}
        </a>
    )
}

export default Link;