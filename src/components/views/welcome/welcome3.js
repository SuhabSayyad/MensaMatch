import { useNavigate } from "react-router-dom";

import logo from "../../img/logo.svg";

//Icons
import { IconContext } from "react-icons";
import { GoPrimitiveDot } from "react-icons/go";

const Welcome3 = () => {
  let navigate = useNavigate();

  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "2em" }}
    >
      <div id="welcome">
        <div id="greenW">
          <div>
            <img src={logo} alt="MMLogo"></img>
          </div>
        </div>
        <p>
          <GoPrimitiveDot onClick={() => navigate("/")} />{" "}
          <GoPrimitiveDot onClick={() => navigate("/welcome2")} />
          <GoPrimitiveDot color="rgba(72, 78, 16, 1)" />
        </p>
        <h1>Welcome to MensaMatch!</h1>
        <p className="description">Let's get it started!</p>
        <p>
          <button className="gradientButton" onClick={() => navigate("/login")}>
            Start!
          </button>
        </p>
      </div>
    </IconContext.Provider>
  );
};

export default Welcome3;
