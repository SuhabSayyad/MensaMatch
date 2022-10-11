import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { user1 } from "../../models/persistence";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateName = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    user1.name = name;
    console.log(user1.name);
    navigate("/settings");
  }

  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={handleSubmit}>
        <h1 id="settingsH1">My Nickname</h1>
        <p id="label">Nickname</p>
        <p>
          <input
            type="text"
            value={name}
            className="settingsInput"
            size="16"
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateName;
