import { useNavigate } from "react-router-dom";

const Question2 = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div id="greenQ"></div>
      <p>Step 2 of 7</p>
      <h1>Upload your photo</h1>
      <p id="display_image"></p>
      <form action="" method="post">
        <p>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="choose_image"
            width="50"
            height="50"
          ></input>
        </p>
        <p className="space"></p>
        <p>
          <button type="submit" className="gradientButton" onClick={() => navigate("/question3")}>Next!</button>
        </p>
      </form>
    </div>
  );
};

export default Question2;