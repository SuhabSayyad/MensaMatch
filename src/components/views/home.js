import { useNavigate, useParams } from "react-router-dom";

//Views
import Footer from "../ui/footer";
import Header from "../ui/header";
import Friends from "./profiles/friends";

//Data
import { invitations } from "../models/invitation";
import { users } from "../models/persistence";

const Home = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  return (
    <div id="main">
      <Header />
      <Friends />
      <div id="filter">
        <h2>Invitations</h2>
        {/*Filter still needs to be implemented*/}
        <p>Filter by</p>
      </div>
      <div id="invitationList">
        {/* click on an invitation does not show individual details of an invitation */}
      <div id="friendsList"></div>
        {invitations.map((invitation) => {
          return (
            <div
              key={invitation.id}
              id="invitation"
              onClick={() => navigate("/invitation")}
            >
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

export default Home;
