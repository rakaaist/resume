import './index.css';

function Divider({ isFancy}) {
const className = isFancy ? "divider-fancy" : ""; 

    return (
        <div className="divider">
            <div className={className}></div>
        </div>
    )
}

export default Divider;