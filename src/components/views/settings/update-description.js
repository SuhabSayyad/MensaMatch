//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateDescription = () => {
  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post">
      <h1 id="settingsH1">My Description</h1>
      <p id="label">Description</p>
      <p>
        <input type="text" className="settingsInput" size="40"></input>
      </p>
      <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateDescription;
