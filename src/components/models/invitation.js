import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

//Views
import Footer from "./../ui/footer";
import Header from "./../ui/header";

//Data
import { user1, user2, user3, user4, user5, user6, user7 } from "./persistence";

class Invitation {
  constructor(id, invitor, date, time, place, message) {
    this.id = id;
    this.invitor = invitor;
    this.date = date;
    this.time = time;
    this.place = place;
    this.message = message;
  }
}

var invitation1 = new Invitation(
  uuid(),
  "{user4.name}",
  "today",
  "12:40",
  "FoodFakultät",
  "Let us go to eat pasta together and discuss new researches :)"
);

var invitation2 = new Invitation(
  uuid(),
  "{user3.name}",
  "today",
  "13:00",
  "Hauptmensa",
  "Let us go to eat pasta together and discuss new researches :)"
);

var invitation3 = new Invitation(
  uuid(),
  "{user2.name}",
  "tomorrow",
  "10:00",
  "KostBar",
  "Let us go to eat pasta together and discuss new researches :)"
);

var invitation4 = new Invitation(
  uuid(),
  "{user5.name}",
  "wednesday",
  "14:00",
  "Galerie",
  "Let us go to eat pasta together and discuss new researches :)"
);

var invitation5 = new Invitation(
  uuid(),
  "{user5.name}",
  "friday",
  "10:00",
  "Galerie",
  "Let us go to eat pasta together and discuss new researches :)"
);

var invitation6 = new Invitation(
  uuid(),
  "{user5.name}",
  "friday",
  "13:00",
  "Hauptmensa",
  "Let us go to eat pasta together and discuss new researches :)"
);

var invitations = [
  invitation1,
  invitation2,
  invitation3,
  invitation4,
  invitation5,
  invitation6,
];

export { invitations, Invitation};
//invitation1, invitation2, invitation3, invitation4, invitation5, invitation6;

//-----------------------------------------------------------------------------------------//

const InvitationPage = () => {
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

        <div className="sideBySide">
          <div>
            <img
              src={user2.img}
              id="userImg"
              width="110px"
              height="120px"
            ></img>
          </div>
          <p id="nameI">{user2.name}</p>
        </div>
        <hr />
        <p id="invitationMessage">{invitation1.message}</p>
        <hr />
        <div id="invitationInfo">
          <div className="sideBySide">
            <p className="bold">Where?</p>
            <p>
              {invitation1.date}, &nbsp;{invitation1.time}
            </p>
          </div>
          <div className="sideBySide">
            <p className="bold">When?</p>
            <p>{invitation1.place}</p>
          </div>
        </div>

        <button
          className="gradientButton"
          onClick={() => navigate("/matched")}
        >
          Match!
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default InvitationPage; 

