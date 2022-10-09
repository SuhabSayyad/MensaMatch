import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

//Icons
import { BiArrowBack } from "react-icons/bi";

//Data
import { user1 } from "../../models/persistence";

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
            <img
              src={user1.img}
              id="smallImg"
              width="70px"
              height="70px"
              alt="user's picture"
              onClick={() => navigate("/settings/update-img")}
            ></img>
          </p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My nickname</p>
          <p onClick={() => navigate("/settings/update-name")}>{user1.name}</p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My age</p>
          <p onClick={() => navigate("/settings/update-age")}>{user1.age}</p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My diet</p>
          <p onClick={() => navigate("/settings/update-diet")}>{user1.diet}</p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My education/work</p>
          <p onClick={() => navigate("/settings/update-place")}>
            {user1.place}
          </p>
        </div>
        <hr />
        <div className="sideBySide">
          <p>My description</p>
          <p onClick={() => navigate("/settings/update-description")}>
            {user1.description}
          </p>
        </div>
        <hr />
        <div className="sideBySide" id="locationSpace">
          <p>Show my location</p>
          <p>
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider round"></span>
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
