import { useNavigate } from "react-router-dom";

//Icons
import { IconContext } from "react-icons";
import { GoPrimitiveDot } from "react-icons/go";

const Welcome2 = () => {
  let navigate = useNavigate();

  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "2em" }}
    >
      <div>
        <div id="greenW"></div>
        <p>
          <GoPrimitiveDot /> <GoPrimitiveDot color="rgba(72, 78, 16, 1)" />
          <GoPrimitiveDot />
        </p>
        <h1>Welcome to MensaMatch!</h1>
        <p className="description">It is supposed to be a second message</p>
        <p>
          <button className="gradientButton" onClick={() => navigate("/welcome3")}>
            Next!
          </button>
        </p>
      </div>
    </IconContext.Provider>
  );
};

export default Welcome2;
