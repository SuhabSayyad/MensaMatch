import { useNavigate } from "react-router-dom";

//Icons
import { IconContext } from "react-icons";
import { BiArrowBack } from "react-icons/bi";

const Question2 = () => {
  let navigate = useNavigate();

  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "3em" }}
    >
      <div id="questions">
        <div id="greenQ"></div>
        <p className="sideBySide">
          <BiArrowBack onClick={() => navigate(-1)} />
          <p>Step 2 of 7</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </p>
        <h1>Upload your photo</h1>

        <form action="" method="post" onSubmit={() => navigate("/question3")}>
          <p id="display_image"></p>
          <p>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="choose_image"
            ></input>
            <p className="optional">
              <small>(optional)</small>
            </p>
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

export default Question2;