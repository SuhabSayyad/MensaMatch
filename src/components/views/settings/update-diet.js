import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { user1 } from "../../models/persistence";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateDiet = () => {
  let navigate = useNavigate();

    const [diet, setDiet] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      user1.diet = diet;
      console.log(user1.diet);
      navigate("/settings");
    };

  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={handleSubmit}>
        <h1 id="settingsH1">My Diet</h1>
        <p id="label">Diet</p>
        <div>
          <select id="diet" value={diet} required onChange={(e) => setDiet(e.target.value)}>
            <option value="Omnivore" defaultValue>
              Omnivore
            </option>
            <option value="Pescetarian">Pescetarian</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </div>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateDiet;
