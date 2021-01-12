import Pill from "./components/Pill";
import ContentBox from "./components/ContentBox";
import Select from "./components/Select.js";
import Link from "./components/Link";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import List from "./components/List.js";
import ContactBox from "./components/ContactBox";

import './index.css';
import Divider from "./components/Divider";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-top">
          <div className="navigation">
            <Select
              options={[
                { value: "en", text: "English" },
                { value: "lt", text: "Lietuvių" }
              ]}
            />
          </div>
        </div>
        <div className="name-box">
          <h1 className="name">Aistė Rakauskaitė</h1>
          <h2 className="profession">Programerė</h2>
        </div>
      </header>

      <main>

        <section className="links-about">

          <ContentBox title="Links">
            <Link image href="https://lt.linkedin.com/" imgSrc="https://cdn.iconscout.com/icon/free/png-256/linkedin-168-558642.png">LINKEDIN/rakaaist</Link>
            <Link image href="https://lt.linkedin.com/" imgSrc="https://cdn.iconscout.com/icon/free/png-256/linkedin-168-558642.png">LINKEDIN/rakaaist</Link>
            <Link image href="https://lt.linkedin.com/" imgSrc="https://cdn.iconscout.com/icon/free/png-256/linkedin-168-558642.png">LINKEDIN/rakaaist</Link>
            <Link image href="https://lt.linkedin.com/" imgSrc="https://cdn.iconscout.com/icon/free/png-256/linkedin-168-558642.png">LINKEDIN/rakaaist</Link>
          </ContentBox>

          <ContentBox title="About me">
            <p className="about-info">dfghjkl;kjhghjkllkhghjkllkjhjk,mnbhjkl</p>
          </ContentBox>

        </section>

        <section className="education-skills">

          <ContentBox title="Education">
            <Education school="UAB 'Programuok'" date="2020.07-2020.12" profession="Fullstack programmer"></Education>

            <Divider />

            <Education school="ISM" date="2009.09-2013.02" profession="International business and communication"></Education>
          </ContentBox>

          <ContentBox title="Personal skills">
            <Pill color="green">Teamwork</Pill>
            <Pill color="yellow">Communication</Pill>
            <Pill color="red">Organization</Pill>
          </ContentBox>

          <ContentBox title="Technical skills">
            <Pill color="green">HTML</Pill>
            <Pill color="green">CSS</Pill>
            <Pill color="yellow">JAVASCRIPT</Pill>
            <Pill color="yellow">PHP</Pill>
            <Pill color="yellow">REACT.JS</Pill>
          </ContentBox>

        </section>

        <section>

          <ContentBox title="Work experience" className="App-work-experience-container">

            <WorkExperience job="Insurance manager" date="2013-2018" company="Baltic American Clinic">
              Darbas nuostabus. skaiciavau, sokau ir dainavau :D
              <List
                listItems={[
                  "English", "Lietuvių"
                ]} />
            </WorkExperience>

            <WorkExperience job="Insurance manager" date="2013-2018" company="Baltic American Clinic">
              Darbas nuostabus. skaiciavau, sokau ir dainavau :D
              <List
                listItems={[
                  "English", "Lietuvių"
                ]} />
            </WorkExperience>

            <WorkExperience job="Insurance manager" date="2013-2018" company="Baltic American Clinic">
              Darbas nuostabus. skaiciavau, sokau ir dainavau :D
              <List
                listItems={[
                  "English", "Lietuvių"
                ]} />
            </WorkExperience>

          </ContentBox>

        </section>

        <Divider />

        <footer className="footer">

          <ContactBox title="addresss">
            Jonazoliu st. 9-30, Vilnius
          </ContactBox>

          <ContactBox title="contacts">
            <Link href="tel:+37060000123">+37063612218</Link>
            <Link href="mailto: rakaaist@gmail.com">rakaaist@gmail.com</Link>
          </ContactBox>

          <ContactBox title="social">
            <Link href="https://lt.linkedin.com/">LINKEDIN/rakaaist</Link>
          </ContactBox>

        </footer>

      </main>
    </div>
  );
}

export default App;
