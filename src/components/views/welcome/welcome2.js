import { useNavigate } from "react-router-dom";

import logo from "../../img/logo.svg";

//Icons
import { IconContext } from "react-icons";
import { GoPrimitiveDot } from "react-icons/go";

const Welcome2 = () => {
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
          <GoPrimitiveDot color="rgba(72, 78, 16, 1)" />
          <GoPrimitiveDot onClick={() => navigate("/welcome3")} />
        </p>
        <h1>Welcome to MensaMatch!</h1>
        <p className="description">It is supposed to be a second message</p>
        <p>
          <button
            id="fixedButton"
            className="gradientButton"
            onClick={() => navigate("/welcome3")}
          >
            Next!
          </button>
        </p>
      </div>
    </IconContext.Provider>
  );
};

export default Welcome2;
