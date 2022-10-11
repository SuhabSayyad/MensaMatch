import { useNavigate } from "react-router-dom";

//Icons
import { IconContext } from "react-icons";
import { BiArrowBack } from "react-icons/bi";

const Question6 = () => {
  let navigate = useNavigate();

  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "3em" }}
    >
      <div id="questions">
        <div id="greenQ"></div>
        <p className="sideBySide">
          <BiArrowBack onClick={() => navigate(-1)} />
          <p>Step 6 of 7</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </p>
        <h1>What is your diet?</h1>
        <form action="" method="post" onSubmit={() => navigate("/question7")}>
          <div>
            <select id="diet" required>
              <option value="omnivore" defaultValue>
                Omnivore
              </option>
              <option value="pescetarian">Pescetarian</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>
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

export default Question6;
