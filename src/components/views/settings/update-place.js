//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdatePlace= () => {
  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post">
      <h1 id="settingsH1">My Education/Work Place</h1>
      <p id="label">Education/Work Place</p>
      <p>
        <input type="text" className="settingsInput" size="40"></input>
      </p>
      <SettingsButton />
      </form>
    </div>
  );
};

export default UpdatePlace;
