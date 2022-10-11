import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

//Views
import Footer from "../ui/footer";
import Modal from "./modal";

//Data
import { user1 } from "./persistence";
import { Invitation, invitations } from "./invitation";

const CreateInvitation = () => {
  let navigate = useNavigate();

  //slider
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setActive(true);
    }, 100);
  }, []);

  //save data
  const [data, setData] = useState({
      place: "",
      date: "",
      time: "",
      message: "",

  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setData((prev) => {
      return {...prev, [name]: value}
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let iv = new Invitation(uuid(), user1.id, data.date, data.time, data.place, data.message);
    user1.invites.push(iv);
    invitations.push(iv);
    console.log(iv);
    navigate("/invitation-created");
  }

  //openModal
  const [openModal, setOpenModal] = useState(false);
  const handleCancel = () => {
    setOpenModal(true);
  }

  return (
    <div>
      <div id="matchSlider" className={active ? "active" : ""}>
        <p>
          <span id="span"></span>
        </p>
        <h1>Create invitation</h1>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div>
            <select
              id="choosePlace"
              name="place"
              onChange={handleChange}
              required
            >
              <option value={data.place} defaultValue hidden>
                Where?
              </option>
              <option value="Hauptmensa">Hauptmensa</option>
              <option value="FoodFakultät">FoodFakultät</option>
              <option value="KostBar">KostBar</option>
              <option value="Galerie">Galerie</option>
              <option value="Archeteria">Archeteria</option>
              <option value="Vital">Vital</option>
              <option value="Mensa-Süd">Mensa-Süd</option>
              <option value="Mensa der ISM">Mensa der ISM</option>
            </select>
          </div>
          <p></p>
          <div>
            <input
              id="choosePlace"
              type="date"
              name="date"
              value={data.date}
              onChange={handleChange}
              required
            ></input>
          </div>
          <p></p>
          <div>
            <input
              id="choosePlace"
              type="time"
              name="time"
              value={data.time}
              onChange={handleChange}
              required
            ></input>
          </div>
          <p></p>
          <div>
            <textarea
              id="chooseMessage"
              name="message"
              value={data.message}
              cols="33"
              rows="10"
              maxLength="500"
              placeholder="Enter your message here!"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <button className="gradientButton"  type="submit">
              Post
            </button>
          </div>
          <p></p>
          <div>
            <button id="cancel" className="edit" onClick={handleCancel}>
              Cancel
            </button>
            {openModal && <Modal modal={setOpenModal} />}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateInvitation;
