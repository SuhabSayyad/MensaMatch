import { useNavigate } from "react-router-dom";

const Question1 = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div id="greenQ"></div>
      <p>Step 1 of 7</p>
      <h1>What is your name?</h1>
      <form action="" method="post" onSubmit={() => navigate("/question2")}>
        <p>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="name"
            size="15"
            required
          ></input>
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

export default Question1;
