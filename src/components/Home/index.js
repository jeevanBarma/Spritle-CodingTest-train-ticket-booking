import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const onClickAdmin = () => {
    navigate("/admin-view");
  };

  const onClickAgent = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <div className="home">
        <div className="button-container">
          <div className="card">
            <button className="btn" type="button" onClick={onClickAdmin}>
              <h1 className="heading">SuperAdmin</h1>
              <img
                className="logo"
                src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png"
                alt="img"
              />
            </button>

            <button className="btn" type="button" onClick={onClickAgent}>
              <h1 className="heading">Agent</h1>
              <img
                className="logo"
                src="https://cdn4.iconfinder.com/data/icons/user-interface-color-set/128/support_user_interface_color_b-512.png"
                alt="img"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
