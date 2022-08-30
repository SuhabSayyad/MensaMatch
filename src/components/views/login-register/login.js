//Icons
import { IconContext } from "react-icons";
import { BsGoogle } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

const Login = () => {
  return (
    <IconContext.Provider value={{ color: "black", size: "3em" }}>
      <div>
        <div id="greenL"></div>
        <h1>Login</h1>
        <p className="descriptionL">Log in using these platforms:</p>
        <p>
          <BsGoogle size="2.5em" /> <BsApple />
        </p>
        <form action="" method="post">
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
              type="text"
              className="input"
              name="password"
              size="15"
              placeholder="password"
              required
            ></input>
          </p>
          <p id="space"></p>
          <p>
            <button type="submit" className="gradientButton">Log in</button>
          </p>
          <p>
            <button>Register</button>
          </p>
        </form>
      </div>
    </IconContext.Provider>
  );
};

export default Login;