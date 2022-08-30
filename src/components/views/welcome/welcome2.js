import { IconContext } from "react-icons";
import { GoPrimitiveDot } from "react-icons/go";

const Welcome2 = () => {
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
          <button className="gradientButton">Next!</button>
        </p>
      </div>
    </IconContext.Provider>
  );
};

export default Welcome2;
