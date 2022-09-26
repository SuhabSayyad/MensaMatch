import { useNavigate } from "react-router-dom";

//Icons
import { IconContext } from "react-icons";
import { ImWink2 } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";

const Welcome = () => {
  let navigate = useNavigate();

  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "2em" }}
    >
      <div>
        <div id="greenW"></div>
        <p>
          <GoPrimitiveDot color="rgba(72, 78, 16, 1)" /> <GoPrimitiveDot />{" "}
          <GoPrimitiveDot />
        </p>
        <h1>Welcome to MensaMatch!</h1>
        <p className="description">
          Hungry, but lonely? Don't worry, we got you! Make friends and eat
          together <ImWink2 color="rgba(72, 78, 16, 1)" size="1em" />
        </p>

        <p>
          <button
            className="gradientButton"
            onClick={() => navigate("/welcome2")}
          >
            Next!
          </button>
        </p>
      </div>
    </IconContext.Provider>
  );
};

export default Welcome;
