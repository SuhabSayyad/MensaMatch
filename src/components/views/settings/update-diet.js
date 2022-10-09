import { useNavigate } from "react-router-dom";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateDiet = () => {
  let navigate = useNavigate();

  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={() => navigate("/settings")}>
        <h1 id="settingsH1">My Diet</h1>
        <p id="label">Diet</p>
        <div>
          <select required>
            <option value="omnivore" defaultValue>
              Omnivore
            </option>
            <option value="pescetarian">Pescetarian</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateDiet;
