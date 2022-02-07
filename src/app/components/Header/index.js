import Select from "./components/Select";
import ProfilePicture from "../../../assets/img/profile_picture.PNG";

import translations from "../../translations";

import "./index.css";

function Header({ lang, setLang }) {

    return (
        <header className="App-header">
            <img src={ProfilePicture} alt="profile" className="App-header-picture" />
            <div className="App-header-line">
                <Select onChange={setLang}
                    options={[
                        { value: "en", children: "English" },
                        { value: "lt", children: "Lietuvių" },
                    ]}
                />
            </div>
            <section className="App-title-container">
                <h1 className="App-person-title">Aistė Rakauskaitė</h1>
            </section>
        </header>
    );
}

export default Header;
