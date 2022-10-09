import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { IconContext } from "react-icons";

//Icons
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  let navigate = useNavigate();
/*
    const [open, setOpen] = useState(true);

    useEffect(() => {
      setTimeout(function () {
        setOpen(false);
      }, 100);
    }, []);
*/

  return (
    <IconContext.Provider value={{ color: "black", size: "4em" }}>
      <footer id="footer">
        <div className="icons">
          <AiOutlineHome onClick={() => navigate("/main")} />
          <AiOutlineSearch onClick={() => navigate("/map")} />
          <AiOutlinePlus id="plus" />
          <BiEnvelope onClick={() => navigate("/chats")} />
          <CgProfile onClick={() => navigate("/user")} />
        </div>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
