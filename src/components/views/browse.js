import { useNavigate } from "react-router-dom";

//Views
import Footer from "./../ui/footer";

const Browse = () => {
  let navigate = useNavigate();

  return (
    <div id="main">

      <Footer />
    </div>
  );
};

export default Browse;
