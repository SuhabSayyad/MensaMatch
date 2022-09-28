import { useNavigate } from "react-router-dom";

//Views
import Footer from "./../ui/footer";
import Header from "./../ui/header";

//Data
import { user1 } from "../models/persistence";

const Main = () => {
  let navigate = useNavigate();

  return (
    <div id="main">
      <Header />
      <div>
        <p className="sideBySide">My friends</p>
        <div id="friends">
          <ul>
            {user1.friends?.map(friend => {
              return (
                <li>
                  <p>
                    <img src="{user1.friend.img}"></img>
                  </p>
                </li>
              );
              })}
          </ul>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
