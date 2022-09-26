import { useNavigate } from "react-router-dom";

//Views
import Footer from "../ui/footer";
import Header from "../ui/header";

const User = () => {
  let navigate = useNavigate();
  return (
    <div id="user">
      <Header />
      <h1>My Profile</h1>
      <div className="around">
        <div className="info">
          <p id="name">User's Name</p>
          <p className="spacing">user's study/work place</p>
          <div className="sideBySide">
            <p className="spacing">Age</p>
            <p className="spacing">user's age</p>
          </div>
          <div className="sideBySide">
            <p className="spacing">Diet</p>
            <p className="spacing">user's diet</p>
          </div>
        </div>

        <div>
          <p>
            <img src="" width="150px" height="150px" alt="user's picture"></img>
          </p>
          <p>
            <button className="edit" onClick={() => navigate("/settings")}>Edit</button>
          </p>
        </div>
      </div>

      <p className="sideBySide">My invitations</p>
      <p className="sideBySide">My friends</p>
      <Footer />
    </div>
  );
};

export default User;
