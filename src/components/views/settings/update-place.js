import { useNavigate } from "react-router-dom";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdatePlace = () => {
  let navigate = useNavigate();

  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={() => navigate("/settings")}>
        <h1 id="settingsH1">My Education/Work Place</h1>
        <p id="label">Education/Work Place</p>
        <p>
          <input type="text" className="settingsInput" size="40" required></input>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdatePlace;
