//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateAge = () => {
  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post">
        <h1 id="settingsH1">My Age</h1>
        <p id="label">Age</p>
        <p>
          <input type="text" className="settingsInput" size="40"></input>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateAge;
