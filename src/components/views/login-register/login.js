import { useNavigate } from "react-router-dom";

//Icons
import { IconContext } from "react-icons";
import { BsGoogle } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

const Login = () => {
  let navigate = useNavigate();
  return (
    <IconContext.Provider value={{ color: "black", size: "3em" }}>
      <div>
        <div id="greenL"></div>
        {/* function of login needs to be implemented */}
        <h1>Login</h1>
        <p className="descriptionL">Log in using these platforms:</p>
        <p>
          <BsGoogle size="2.5em" /> <BsApple />
        </p>
        <form action="" method="post" onSubmit={() => navigate("/home")}>
          <p>
            <input
              type="text"
              className="input"
              name="username"
              size="15"
              placeholder="username"
              required
            ></input>
          </p>
          <p>
            <input
              type="password"
              className="input"
              name="password"
              size="15"
              placeholder="password"
              required
            ></input>
          </p>
          <p>
            <button type="submit" id="space" className="gradientButton">
              Log in
            </button>
          </p>
          <p>
            <button onClick={() => navigate("/register")}>Register</button>
          </p>
        </form>
      </div>
    </IconContext.Provider>
  );
};

export default Login;
