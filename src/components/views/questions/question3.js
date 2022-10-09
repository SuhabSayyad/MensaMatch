import { useNavigate } from "react-router-dom";

const Question3 = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div id="greenQ"></div>
      <p>Step 3 of 7</p>
      <h1>Tell us about your hobbies!</h1>
      <form action="" method="post" onSubmit={() => navigate("/question4")}>
        <p>
          <textarea id="hobbies" cols="30" rows="10" maxLength="250"></textarea>
        </p>
        <p className="optional">
          <small>(optional)</small>
        </p>
        <p className="space"></p>
        <p>
          <button type="submit" className="gradientButton">
            Next!
          </button>
        </p>
      </form>
    </div>
  );
};

export default Question3;
