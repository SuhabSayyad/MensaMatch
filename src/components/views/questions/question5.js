import { useNavigate } from "react-router-dom";

const Question5 = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div id="greenQ"></div>
      <p>Step 5 of 7</p>
      <h1>Where do you study/work?</h1>
      <form action="" method="post">
        <p>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="place"
            size="15"
            required
          ></input>
        </p>
        <p className="space"></p>
        <p>
          <button
            type="submit"
            className="gradientButton"
            onClick={() => navigate("/question6")}
          >
            Next!
          </button>
        </p>
      </form>
    </div>
  );
};

export default Question5;
