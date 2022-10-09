import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import logo2 from "../img/logo2.svg";

//Views
import Footer from "../ui/footer";



const Matched = () => {
  let navigate = useNavigate();

  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setActive(true);
    }, 100);
  }, 
  []);

  return (
    <div>
      <div id="matchSlider" className={active ? "active" : ""}>
        <p>
          <span id="span"></span>
        </p>
        <div>
          <img src={logo2} alt="mm-logo2"></img>
        </div>
        <p id="matchMessage">Yeah! You have matched!</p>
        <div>
          <button onClick={() => navigate("/chat")}>
            Chat!
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Matched;
