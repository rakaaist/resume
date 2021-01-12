import './index.css';

function Divider({ isFancy, isShort }) {
    const fancy = isFancy ? "divider-fancy" : "";
    const short = isShort ? "divider-short" : "";

    return (
        <hr className={`divider ${fancy} ${short}`} />
    )
}

export default Divider;