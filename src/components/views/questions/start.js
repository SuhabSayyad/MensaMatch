import { useNavigate } from "react-router-dom";

const Start = () => {
  let navigate = useNavigate();
  
  return (
    <div>
      <div id="greenQ"></div>
      <h1>Tell us a bit more about you!</h1>
      <p className="space"></p>
      <p className="description">
        We and other members would like to know a bit more about you! Answer a
        few questions to start.
      </p>
      <p>
        <button
          id="fixedButton"
          className="gradientButton"
          onClick={() => navigate("/question1")}
        >
          Okay!
        </button>
      </p>
    </div>
  );
};

export default Start;
