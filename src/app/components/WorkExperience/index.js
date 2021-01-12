import './index.css';

function WorkExperience({ job, company, date, description, children }) {

    return (
        <div className="job">
            <h3>{job}</h3>
            <h4>{company}</h4>
            <h4>{date}</h4>
            <p>{description}</p>
            {children}
        </div>
    )
}

export default WorkExperience;