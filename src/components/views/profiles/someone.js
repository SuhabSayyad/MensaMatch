import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


//Views
import Footer from "./../../ui/footer";
import Header from "./../../ui/header";

//Data
import { user2 } from "../../models/persistence";


const Someone = () => {
  let navigate = useNavigate();

  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setActive(true);
    }, 100);
  }, []);

  return (
    <div>
      <Header />
      <div id="slideBox" className={active ? "active" : ""}>
        <p>
          <span id="span"></span>
        </p>
        <div id="someonesProfile">
          <div id="upperInfo">
            <p id="name">{user2.name}</p>
            <p>{user2.place}</p>
          </div>
          <div className="around">
            <div>
              <p>
                <img
                  src={user2.img}
                  id="userImg"
                  width="150px"
                  height="130px"
                ></img>
              </p>
            </div>
            <div className="info">
              <hr />
              <div className="sideBySide">
                <p className="spacing">Age</p>
                <p className="spacing">{user2.age}</p>
              </div>
              <hr />
              <div className="sideBySide">
                <p className="spacing">Diet</p>
                <p className="spacing">{user2.diet}</p>
              </div>
              <hr />
            </div>
          </div>

          <p>
            <button className="edit" onClick={() => navigate("/main")}>
              Add Friend
            </button>
          </p>

          <input
            type="text"
            id="keyboard2"
            placeholder="Enter your message here!"
          ></input>

          <p>
            <button
              id="send"
              className="gradientButton"
              onClick={() => navigate("/main")}
            >
              Send
            </button>
          </p>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Someone;
