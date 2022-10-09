import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//Views
import Footer from "./../../ui/footer";

//Data
import { user1 } from "../../models/persistence";

const Chats = () => {
  let navigate = useNavigate();

  const [active, setActive] = useState(false);

  useEffect(() => {setTimeout(function () {
    setActive(true);
  }, 100);
  },
  []);

  return (
    <div>
      <div id="chatListSlider" className={active ? "active" : ""}>
        <p>
          <span id="span"></span>
        </p>
        <div className="chatList">
          <div id="friends">
            {user1.friends?.map((friend) => {
              return (
                <>
                  <div>
                    <div
                      id="friendsInfoSmall"
                      onClick={() => navigate("/chat")}
                    >
                      <img src={friend.img} alt="Avatar"></img>
                      <div id="msgContainer">
                        <p>{friend.name}</p>
                        <p id="message">{friend.chats}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chats;
