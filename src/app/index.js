import Pill from "./components/Pill";
import ContentBox from "./components/ContentBox";
import Select from "./components/Select.js";
import Link from "./components/Link";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import List from "./components/List.js";
import Footer from "./components/Footer";
import translations from "./translations";
import { Fragment, useState } from "react";

import './index.css';
import Divider from "./components/Divider";

function App() {
const [lang, setLang] = useState("en");

  return (
    <div className="App">
      <header>
        <div className="header-top">
          <div className="navigation">
            <Select onChange={setLang}
              options={[
                { value: "en", children: "English" },
                { value: "lt", children: "Lietuvių" }
              ]}
            />
          </div>
        </div>
        <div className="name-box">
          <h1 className="name">Aistė Rakauskaitė</h1>
          <h2 className="profession">{translations[lang].profession}</h2>
        </div>
      </header>

      <main>

        <section className="links-about section">

          <ContentBox title={translations[lang].personalLinks.title}>
            {translations[lang].personalLinks.links.map(({ href, imgSrc, imgAlt, text }) => {
              return <Link href={href} imgSrc={imgSrc} imgAlt={imgAlt}>{text}</Link>
            })}
          </ContentBox>

          <ContentBox title={translations[lang].aboutMe.title}>
            <p className="about-info">{translations[lang].aboutMe.text}</p>
          </ContentBox>

        </section>

        <section className="education-skills section">

          <ContentBox title={translations[lang].education.title}>
            {translations[lang].education.universities.map(({ school, date, profession }, index, array) => {
              return <Fragment>
                <Education school={school} date={date} profession={profession}></Education>
                {index !== array.length - 1 && <Divider isShort />}
              </Fragment>
            })}
          </ContentBox>

          <ContentBox title={translations[lang].personalSkills.title}>
            {translations[lang].personalSkills.skills.map(({ text, level }) => {
              return <Pill color={level}>{text}</Pill>
            })}
          </ContentBox>

          <ContentBox title={translations[lang].technicalSkills.title}>
            {translations[lang].technicalSkills.skills.map(({ text, level }) => {
              return <Pill color={level}>{text}</Pill>
            })}
          </ContentBox>

        </section>

        <section className="section">

          <ContentBox title={translations[lang].workExperience.title} className="work-experience-container">
            {translations[lang].workExperience.jobs.map(({ jobTitle, date, company, text, workAchievements }) => {
              return <WorkExperience job={jobTitle} date={date} company={company}>
                { text }
              <List 
                  listItems={ workAchievements } />
              </WorkExperience>
            })}
          </ContentBox>

        </section>

        <Divider />

        <Footer></Footer>

      </main>
    </div>
  );
}

export default App;
