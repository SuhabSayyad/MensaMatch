import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

//Icons
import { BiArrowBack } from "react-icons/bi";


const Settings = () => {
let navigate = useNavigate();
  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "4em" }}
    >
      <div id="settings">
        <header id="arrow">
          <BiArrowBack onClick={() => navigate("/user")} />
        </header>
        <h1 id="settingsH1">Settings</h1>
        <div className="sideBySide" id="avatarSpace">
          <p>My avatar</p>
          {/* Bild einfügen*/}
          <p>
            <img src="" width="50px" height="50px" alt="user's picture"></img>
          </p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My nickname</p>
          <p onClick={() => navigate("/settings/update-name")}>user's name</p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My age</p>
          <p onClick={() => navigate("/settings/update-age")}>user's age</p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My diet</p>
          <p onClick={() => navigate("/settings/update-diet")}>user's diet</p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My education/work</p>
          <p onClick={() => navigate("/settings/update-place")}>user's education</p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My description</p>
          <p onClick={() => navigate("/settings/update-description")}>
            users's description
          </p>
        </div>
        <hr />
        <div className="sideBySide" id="locationSpace">
          <p>Show my location</p>
          <p>
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>
          </p>
        </div>
        <button className="gradientButton" onClick={() => navigate("/login")}>
          Log out
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default Settings;
