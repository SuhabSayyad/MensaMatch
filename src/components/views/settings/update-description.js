import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { user1 } from "../../models/persistence";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateDescription = () => {
  let navigate = useNavigate();

  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    user1.description = description;
    console.log(user1.description);
    navigate("/settings");
  };

  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={handleSubmit}>
        <h1 id="settingsH1">My Description</h1>
        <p id="label">Description</p>
        <p>
          <textarea
            type="text"
            value={description}
            className="settingsTextarea"
            cols="16"
            rows="8"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateDescription;
