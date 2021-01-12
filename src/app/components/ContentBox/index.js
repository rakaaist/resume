import './index.css';
import Divider from '../Divider';

function ContentBox({ children, title, className = "" }) {
    return (
        <div>
            {title && <h3 className="content-title">{title}</h3>}
            <Divider isFancy />
            <div className={className}>{children}</div>
        </div>
    );
}

export default ContentBox;