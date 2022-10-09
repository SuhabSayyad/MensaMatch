import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";

//Icons
import { BiArrowBack } from "react-icons/bi";

//svg
import gregor from "./../../img/gregor.svg";

const Chat = () => {
  let navigate = useNavigate();

    const [active, setActive] = useState(false);

    useEffect(() => {
      setTimeout(function () {
        setActive(true);
      }, 100);
    }, []);

  return (
    <IconContext.Provider
      value={{ color: "rgba(193, 217, 46, 1)", size: "4em" }}
    >
      <div id="chatFrame">
        <header id="arrow">
          <BiArrowBack onClick={() => navigate(-1)} />
        </header>
        <div id="friendsInfo">
          <img src={gregor} alt="Avatar"></img>
          <p>Gregor Zamza</p>
        </div>
        {/*Tricked: Only a few Frontend messages, because implementing live Chat is too complicated here*/}
        <div id="slideBox" className={active ? "active" : ""}>
          <div className="friendMsg">
            <p>
              Hello. Mind if I join you for your invitation at 12:00 in the
              Hauptmensa?
            </p>
            <span className="time">11:00</span>
          </div>
          <div className="userMsg">
            <p>Hey, of course not! I would be happy to meet you there!</p>
            <span className="time">11:01</span>
          </div>
          <div className="friendMsg">
            <p>Cool, I will see you later then!</p>
            <span className="time">11:02</span>
          </div>
          <div className="userMsg">
            <p>Yes, I will be waiting for you!</p>
            <span className="time">11:05</span>
          </div>
          <p>
            <input
              type="text"
              id="keyboard"
              placeholder="Enter your message here!"
            ></input>
          </p>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Chat;
