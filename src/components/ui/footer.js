import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

//Icons
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  let navigate = useNavigate();

  function showChats() {
    navigate("/chats")
    document.getElementById("chatListSlider").classList.toggle("active");
  }

  return (
    <IconContext.Provider value={{ color: "black", size: "4em" }}>
      <footer id="footer">
        <div className="icons">
          <AiOutlineHome onClick={() => navigate("/main")} />
          <AiOutlineSearch onClick={() => navigate("/browse")} />
          <AiOutlinePlus id="plus" />
          <BiEnvelope onClick={showChats} />
          <CgProfile onClick={() => navigate("/user")} />
        </div>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
