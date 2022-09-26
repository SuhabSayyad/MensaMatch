import { useNavigate } from "react-router-dom";

//Views
import Footer from "./../../ui/footer";

const Chats = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div id="chatSlider">
        <p>
          <span></span>
        </p>
        <ul className="chatList">
          <li>Chat 1</li>
          <li>Chat 2</li>
          <li>Chat 3</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Chats;
