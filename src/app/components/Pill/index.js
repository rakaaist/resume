import './index.css';

function Pill({ children, id }) {
    return (
        <div id={id} className="skill">
            <div className="skill-margin">
                <span className="pill">{children}</span>
            </div>
        </div>
    );
}

export default Pill