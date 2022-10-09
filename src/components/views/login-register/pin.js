import { useNavigate } from "react-router-dom";

const Pin = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div id="greenL"></div>
      <h1>Pin-Code</h1>
      <p className="descriptionL">
        We have sent you a Code per E-Mail to verify your account
      </p>
      <form
        action=""
        method="post"
        onSubmit={() => navigate("/start-questions")}
      >
        <div id="pinInput">
          <input
            type="text"
            className="input"
            size="1"
            maxLength="1"
            required
          ></input>
          <input
            type="text"
            className="input"
            size="1"
            maxLength="1"
            required
          ></input>
          <input
            type="text"
            className="input"
            size="1"
            maxLength="1"
            required
          ></input>
          <input
            type="text"
            className="input"
            size="1"
            maxLength="1"
            required
          ></input>
        </div>
        <p id="space"></p>
        <p>
          <button type="submit" className="gradientButton">
            Go!
          </button>
        </p>
      </form>
    </div>
  );
};

export default Pin;
