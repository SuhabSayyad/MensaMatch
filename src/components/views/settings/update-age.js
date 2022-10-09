import { useNavigate } from "react-router-dom";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateAge = () => {
  let navigate = useNavigate();

  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={() => navigate("/settings")}>
        <h1 id="settingsH1">My Age</h1>
        <p id="label">Age</p>
        <p>
          <input type="number" className="settingsInput" size="40" required></input>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateAge;
