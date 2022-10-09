import { useNavigate } from "react-router-dom";

//Data
import { user1 } from "../../models/persistence";

const Friends = () => {
  let navigate = useNavigate();

  return (
    <div id="friendsList">
      <p className="sideBySide">My friends</p>
      <div id="friendsList">
        <div id="friends">
          {user1.friends?.map((friend) => {
            return (
              <img src={friend.img} onClick={() => navigate("/someone")}></img>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Friends;
