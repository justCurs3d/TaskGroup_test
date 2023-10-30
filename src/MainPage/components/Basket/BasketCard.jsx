import React from "react";
import { useBasket } from "../../../store";
import { CloseCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import { Tooltip } from "antd";

function BasketCard({ item }) {
  const removeBasketItem = useBasket((state) => state.removeBasketItem);

  return (
    <div className="basketCard mb-20">
      <img
        className="mr-20"
        src={item.file}
        width={70}
        height={70}
        alt="sneakers"
      />
      <div className="mr-10">
        <p>{item.name}</p>
        <b>{item.price} руб.</b>
      </div>
      <Tooltip title="Удалить из корзины" placement="bottom">
        <MinusCircleTwoTone
          twoToneColor={"#FF6347"}
          className="delete"
          onClick={() => removeBasketItem(item.id)}
        />
      </Tooltip>
    </div>
  );
}

export default BasketCard;
