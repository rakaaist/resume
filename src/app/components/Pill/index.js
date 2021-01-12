import './index.css';

function Pill({ children, color, id }) {
    const assignedColor = ['red', 'yellow', 'green'].includes(color) ? color : "grey";


    return (
        <div id={id} className="pill">
            <span className={`pill-${assignedColor}`}>{children}</span>
        </div>
    );
}

export default Pill;