import { useNavigate } from "react-router-dom";

//Icons
import { IconContext } from "react-icons";
import { BiArrowBack } from "react-icons/bi";

const Question3 = () => {
  let navigate = useNavigate();

  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "3em" }}
    >
      <div id="questions">
        <div id="greenQ"></div>
        <p className="sideBySide">
          <BiArrowBack onClick={() => navigate(-1)} />
          <p>Step 3 of 7</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </p>
        <h1>Tell us about your hobbies!</h1>
        <form action="" method="post" onSubmit={() => navigate("/question4")}>
          <p>
            <textarea
              className="questionArea"
              id="hobbies"
              cols="30"
              rows="10"
              maxLength="250"
            ></textarea>
          </p>
          <p className="optional">
            <small>(optional)</small>
          </p>
          <p>
            <button id="fixedButton" type="submit" className="gradientButton">
              Next!
            </button>
          </p>
        </form>
      </div>
    </IconContext.Provider>
  );
};

export default Question3;
