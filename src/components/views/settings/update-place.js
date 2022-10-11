import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { user1 } from "../../models/persistence";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdatePlace = () => {
  let navigate = useNavigate();

  const [place, setPlace] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    user1.place = place;
    console.log(user1.place);
    navigate("/settings");
  };

  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={handleSubmit}>
        <h1 id="settingsH1">My Education/Work Place</h1>
        <p id="label">Education/Work Place</p>
        <p>
          <input
            type="text"
            value={place}
            size="16"
            className="settingsInput"
            onChange={(e) => setPlace(e.target.value)}
            required
          ></input>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdatePlace;
