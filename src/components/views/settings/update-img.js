import { useNavigate } from "react-router-dom";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateImg = () => {
  let navigate = useNavigate();

  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={() => navigate("/settings")}>
        <h1 id="settingsH1">My Avatar</h1>
        <p id="display_image"></p>
        <p>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="choose_image"
            width="50"
            height="50"
            required
          ></input>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateImg;
