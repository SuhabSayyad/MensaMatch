import { useNavigate } from "react-router-dom";

const SettingsButton = () => {
  let navigate = useNavigate();
  return (
    <button className="gradientButton" onClick={() => navigate("/settings")}>
      Save
    </button>
  );
};

export default SettingsButton;
