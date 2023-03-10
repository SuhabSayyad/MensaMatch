import { useNavigate } from "react-router-dom";

//Views
import Footer from "../../ui/footer";
import Header from "../../ui/header";
import Friends from "./friends";

//Data
import { user1 } from "../../models/persistence";


const User = () => {
  let navigate = useNavigate();
  return (
    <div id="user">
      <Header />
      <h1>My Profile</h1>
      <div className="around">
        <div className="info">
          <p id="name">{user1.name}</p>
          <p className="spacing">{user1.place}</p>
          <div className="sideBySide">
            <p className="spacing">Age</p>
            <p className="spacing">{user1.age}</p>
          </div>
          <div className="sideBySide">
            <p className="spacing">Diet</p>
            <p className="spacing">{user1.diet}</p>
          </div>
        </div>

        <div>
          <p>
            <img
              src={user1.img}
              id="userImg"
              width="150px"
              height="130px"
            ></img>
          </p>
          <p>
            <button className="edit" onClick={() => navigate("/settings")}>
              Edit
            </button>
          </p>
        </div>
      </div>
      <p className="sideBySide">My invitations</p>
      {/*edit/delete invitation needs to be implemented*/}
      <div id="invitationList">
        {user1.invites.map((invite) => {
          return (
            <div key={invite.id} id="invitation" onClick={() => navigate("/invitation")}>
              <div id="time">
                <p>{invite.date},&nbsp;</p>
                <p>{invite.time}</p>
              </div>
              <p id="place">{invite.place}</p>
            </div>
          );
        })}
      </div>
      <Friends />
      <Footer />
    </div>
  );
};

export default User;
