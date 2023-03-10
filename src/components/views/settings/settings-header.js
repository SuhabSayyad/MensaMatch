import { useNavigate } from "react-router-dom";

//Icons
import { IconContext } from "react-icons";
import { BiArrowBack } from "react-icons/bi";

const SettingsHeader = () => {
  let navigate = useNavigate();
  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "4em" }}
    >
      <header id="arrow">
        <BiArrowBack onClick={() => navigate("/settings")} />
      </header>
    </IconContext.Provider>
  );
};

export default SettingsHeader;
