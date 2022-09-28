import { useNavigate } from "react-router-dom";

//Views
import Footer from "./../../ui/footer";

//svg
import gregor from "./../../img/gregor.svg";

const Chats = () => {
  let navigate = useNavigate();

  return (
    <div id="chatFrame">
      <div id="chatListSlider">
        <p>
          <span id="span"></span>
        </p>
        <ul className="chatList">
          <div className="userChat">
            <div id="friendsInfoSmall" onClick={() => navigate("/chat")}>
              <img src={gregor} alt="Avatar"></img>
              <div>
                <p>Gregor Zamza</p>
                <p id="message">Yes, I will be waiting for you!</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="userChat">
            <div id="friendsInfoSmall" onClick={() => navigate("/chat")}>
              <img src={gregor} alt="Avatar"></img>
              <div>
                <p>Gregor Zamza</p>
                <p id="message">Yes, I will be waiting for you!</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="userChat">
            <div id="friendsInfoSmall" onClick={() => navigate("/chat")}>
              <img src={gregor} alt="Avatar"></img>
              <div>
                <p>Gregor Zamza</p>
                <p id="message">Yes, I will be waiting for you!</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="userChat">
            <div id="friendsInfoSmall" onClick={() => navigate("/chat")}>
              <img src={gregor} alt="Avatar"></img>
              <div>
                <p>Gregor Zamza</p>
                <p id="message">Yes, I will be waiting for you!</p>
              </div>
            </div>
            <hr />
          </div>

        
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Chats;
