import { IconContext } from "react-icons";
import { GoPrimitiveDot } from "react-icons/go";

const Welcome3 = () => {
  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "2em" }}
    >
      <div>
        <div id="greenW"></div>
        <p>
          <GoPrimitiveDot /> <GoPrimitiveDot />
          <GoPrimitiveDot color="rgba(72, 78, 16, 1)" />
        </p>
        <h1>Welcome to MensaMatch!</h1>
        <p className="description">Let's get it started!</p>
        <p>
          <button className="gradientButton">Start!</button>
        </p>
      </div>
    </IconContext.Provider>
  );
};

export default Welcome3;
