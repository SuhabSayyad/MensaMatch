import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { user1 } from "../../models/persistence";

//Views
import SettingsHeader from "./settings-header";
import SettingsButton from "./settings-button";

const UpdateImg = () => {
  let navigate = useNavigate();

  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    user1.img = img;
    console.log(user1.img);
    navigate("/settings");
  };


  return (
    <div id="settings">
      <SettingsHeader />
      <form action="" method="post" onSubmit={handleSubmit}>
        <h1 id="settingsH1">My Avatar</h1>
        {/*not working because image is not showing*/}
        <img id="display_image" src={img}></img>
        <p>
          <input
            type="file"
            value={img}
            accept="image/*"
            name="image"
            id="choose_image"
            onChange={(e) => setImg(e.target.value)}
            required
          ></input>
        </p>
        <SettingsButton />
      </form>
    </div>
  );
};

export default UpdateImg;
