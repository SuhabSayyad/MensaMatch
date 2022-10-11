import { useNavigate } from "react-router-dom";

//Icons
import { IconContext } from "react-icons";
import { BiArrowBack } from "react-icons/bi";

const Question7 = () => {
  let navigate = useNavigate();
  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "3em" }}
    >
      <div id="questions">
        <div id="greenQ"></div>
        <p className="sideBySide">
          <BiArrowBack onClick={() => navigate(-1)} />
          <p>Step 7 of 7</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </p>
        <h1>Add a description of yourself</h1>
        <form action="" method="post" onSubmit={() => navigate("/home")}>
          <p>
            <textarea
              className="questionArea"
              id="user_description"
              cols="30"
              rows="10"
              maxLength="500"
            ></textarea>
          </p>
          <p className="optional">
            <small>(optional)</small>
          </p>
          <p>
            <button id="fixedButton" type="submit" className="gradientButton">
              Finished!
            </button>
          </p>
        </form>
      </div>
    </IconContext.Provider>
  );
};

export default Question7;
