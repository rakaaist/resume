import ContentBlock from "../ContentBlock";
import Link from "../Link";
import Pill from "../Pill";
import JobExperience from "../JobExperience";
import Divider from "../Divider";
import './index.css';

import translations from "../../translations";

import { Fragment } from "react";

import "./index.css";

function Main({ lang }) {
  return (
    <main>
      <section className="App-links-about">
        <ContentBlock title={translations[lang].personalLinks.title} className="App-links-ul">
          {translations.en.personalLinks.links.map(({ link, imgSrc, imgAlt, text }) => {
            return <Link
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              link={link}
            >
              {text}
            </Link>
          })}
        </ContentBlock>
        <ContentBlock title={translations[lang].aboutMe.title}>
          <p className="App-about-text">
            {translations[lang].aboutMe.text}
          </p>
        </ContentBlock>
      </section>
      <section className="App-skills-section">
        <ContentBlock title={translations[lang].education.educationTitle} className="App-skills">
          {translations[lang].education.schools.map(({ schools, years, degree }, index, array) => {
            console.log(degree);
            return <Fragment>
              <p className="App-educ-inner-text">
                <p className="App-educ-title">{schools}</p>
                {years}<br />
                {degree}
              </p>
              {index !== array.length - 1 && <Divider isShort />}
            </Fragment>
          })}
        </ContentBlock>
        <ContentBlock title={translations[lang].personalSkills.title} className="App-skills">
          {translations[lang].personalSkills.skills.map(({ text, level }) => {
            return <Pill color={level}>{text}</Pill>
          })}
        </ContentBlock>
        <ContentBlock title={translations[lang].technicalSkills.title} className="App-skills">
          {translations[lang].technicalSkills.skills.map(({ text, level }) => {
            return <Pill color={level}>{text}</Pill>
          })}
        </ContentBlock>
      </section>
      <ContentBlock title={translations[lang].workExperience.title} className="App-experience-container">
        {translations[lang].workExperience.work.map(({ title, company, years, description }) => {
          return <JobExperience
            title={title}
            company={company}
            years={years}
            description={description}
          >
          </JobExperience>
        })}
      </ContentBlock>
      <Divider />
    </main>
  );

}

export default Main;