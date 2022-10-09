import { useNavigate } from "react-router-dom";

//Views
import Footer from "./../ui/footer";
import Header from "./../ui/header";
import Friends from "./profiles/friends";

//Data
import { invitations } from "../models/invitation";

const Main = () => {
  let navigate = useNavigate();

  return (
    <div id="main">
      <Header />
      <Friends />
      <div id="filter">
        <h2>Invitations</h2>
        <p>Filter by</p>
      </div>
      <div id="invitationList">
        {invitations.map((invitation) => {
          return (
            <div id="invitation" onClick={() => navigate("/invitation")}>
              <div id="time">
                <p>{invitation.date},&nbsp;</p>
                <p>{invitation.time}</p>
              </div>
              <p id="place">{invitation.place}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
