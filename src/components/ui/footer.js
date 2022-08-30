import { IconContext } from "react-icons";
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "black", size: "4em" }}>
      <footer id="footer">
        <div className="icons">
          <AiOutlineHome />
          <AiOutlineSearch />
          <AiOutlinePlus id="plus" />
          <BiEnvelope />
          <CgProfile />
        </div>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
