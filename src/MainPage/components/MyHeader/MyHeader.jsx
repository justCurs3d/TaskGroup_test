import { Link, useNavigate } from "react-router-dom";
import { useAuth, useBasket } from "../../../store";
import "./MyHeader.sass";
import { LogoutOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import logo from '/src/assets/logo.png'

function MyHeader({ setIsBasket, sneakers }) {
  const setAuthValue = useAuth((state) => state.setValue);
  const navigate = useNavigate();

  const unAuthorization = () => {
    localStorage.removeItem("isAuth");
    setAuthValue(false);
    navigate("/login");
  };

  const basketItems = useBasket((state) => state.basketItems);

  let sum = basketItems.reduce((sum, value) => {
    return sneakers[value - 1].price + sum;
  }, 0);

  return (
    <header className="d-flex justify-between align-end p-40">
      <div className="header__left d-flex align-center">
        <img className="mr-10" src={logo} />
        <div>
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="header__right d-flex align-center">
        <li>
          <span>
            <Tooltip title="Корзина">
              <ShoppingOutlined
                className="header_icon_basket"
                onClick={() => setIsBasket(true)}
              />
            </Tooltip>
          </span>
          <span>{basketItems.length > 0 ? `${sum} руб.` : ""} </span>
        </li>
        <li>
          <span>
            <Tooltip title='Выйти' >
              <LogoutOutlined
              className="header_icon_logout"
              onClick={unAuthorization}
            />
            </Tooltip>
            
          </span>
        </li>
      </ul>
    </header>
  );
}

export default MyHeader;
