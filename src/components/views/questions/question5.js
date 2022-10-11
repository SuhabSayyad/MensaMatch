import { useNavigate } from "react-router-dom";

//Icons
import { IconContext } from "react-icons";
import { BiArrowBack } from "react-icons/bi";

const Question5 = () => {
  let navigate = useNavigate();

  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "3em" }}
    >
      <div id="questions">
        <div id="greenQ"></div>
        <p className="sideBySide">
          <BiArrowBack onClick={() => navigate(-1)} />
          <p>Step 5 of 7</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </p>
        <h1>Where do you study/work?</h1>
        <form action="" method="post" onSubmit={() => navigate("/question6")}>
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

export default Question5;
