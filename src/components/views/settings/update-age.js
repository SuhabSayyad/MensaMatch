import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { user1 } from "../../models/persistence";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateAge = () => {
  let navigate = useNavigate();

  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    user1.age = age;
    console.log(user1.age);
    navigate("/settings");
  };


  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={handleSubmit}>
        <h1 id="settingsH1">My Age</h1>
        <p id="label">Age</p>
        <p>
          <input
            type="number"
            value={age}
            size="5"
            className="settingsInput"
            onChange={(e) => setAge(e.target.value)}
            required
          ></input>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateAge;
