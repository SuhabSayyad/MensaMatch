import { useNavigate } from "react-router-dom";

const Question2 = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div id="greenQ"></div>
      <p>Step 2 of 7</p>
      <h1>Upload your photo</h1>

      <form action="" method="post" onSubmit={() => navigate("/question3")}>
        <p id="display_image"></p>
        <p>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="choose_image"
            width="50"
            height="50"
          ></input>
          <p className="optional">
            <small>(optional)</small>
          </p>
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

export default Question2;