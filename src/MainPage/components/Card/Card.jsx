import React from "react";
import "./Card.sass";
import { useBasket } from "../../../store";
import { Tooltip } from "antd";
import {
  MinusCircleOutlined,
  MinusCircleTwoTone,
  PlusCircleOutlined,
  PlusCircleTwoTone,
  PlusSquareOutlined,
} from "@ant-design/icons";

function Card({ item }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const basketItems = useBasket((state) => state.basketItems);
  const addBasketItem = useBasket((state) => state.addBasketItem);
  const removeBasketItem = useBasket((state) => state.removeBasketItem);

  return (
    <div className="card mb-30">
      <img className="sneakerImg" width={133} height={112} src={item.file} />
      <p>{item.name}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{item.price} руб.</b>
        </div>

        {!basketItems.includes(item.id) ? (
          <Tooltip title="Добавить в корзину" placement="bottom">
            <PlusCircleTwoTone
              twoToneColor={"#90d458"}
              onClick={() => {
                addBasketItem(item.id);
              }}
              className="isAdded"
            />
          </Tooltip>
        ) : (
          <Tooltip title="Удалить из корзины" placement="bottom">
            <MinusCircleTwoTone
              twoToneColor={"#FF6347"}
              onClick={() => {
                removeBasketItem(item.id);
              }}
              className="isAdded"
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export default Card;
