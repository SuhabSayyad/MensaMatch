import { useNavigate } from "react-router-dom";

const Question7 = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div id="greenQ"></div>
      <p>Step 7 of 7</p>
      <h1>Add a description</h1>
      <form action="" method="post">
        <p>
          <textarea
            id="user_description"
            cols="30"
            rows="10"
            maxLength="500"
          ></textarea>
        </p>
        <p className="space"></p>
        <p>
          <button
            type="submit"
            className="gradientButton"
            onClick={() => navigate("/main")}
          >
            Finished!
          </button>
        </p>
      </form>
    </div>
  );
};

export default Question7;
