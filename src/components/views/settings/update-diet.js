//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateDiet = () => {
  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post">
        <h1 id="settingsH1">My Diet</h1>
        <p id="label">Diet</p>
        <p>
          <input type="text" className="settingsInput" size="40"></input>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateDiet;
