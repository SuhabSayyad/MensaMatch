import { Link, useNavigate, useParams } from "react-router-dom";

//Data
import { user1 } from "../../models/persistence";

const Friends = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  return (
    <div id="friendsList">
      <p className="sideBySide">My friends</p>
      {/* click on a friend does not show individual details of a friend */}
      <div id="friendsList">
        <div id="friends">
          {user1.friends?.map((friend) => {
            return (
              <Link to={"profile/${friend.id}"}>
                <img key={friend.id} src={friend.img}></img>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Friends;
