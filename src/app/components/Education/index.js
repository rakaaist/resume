import './index.css';

function Education({ school, date, profession }) {

    return (
        <div>
            <h3>{school}</h3>
            <h4>{date}</h4>
            <h4>{profession}</h4>
        </div>
    )
}

export default Education;