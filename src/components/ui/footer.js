import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { IconContext } from "react-icons";

//Icons
import { AiOutlineMail, AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiHomeLine } from "react-icons/ri";

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
          <RiHomeLine className="margin" onClick={() => navigate("/home")} />
          <BiSearch className="margin" onClick={() => navigate("/map")} />
          <AiOutlinePlus className="margin" id="plus" onClick={() => navigate("/create-invitation")}/>
          <AiOutlineMail
            className="margin"
            onClick={() => navigate("/chats")}
          />
          <CgProfile onClick={() => navigate("/user")} />
        </div>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
