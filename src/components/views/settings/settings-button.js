import { useNavigate } from "react-router-dom";

const SettingsButton = () => {
  let navigate = useNavigate();
  return (
    <button type="submit" className="gradientButton">Save</button>
  );
};

export default SettingsButton;