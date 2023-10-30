import React, { useRef, useState } from "react";
import "./Basket.sass";
import BasketCard from "./BasketCard";
import { useBasket } from "../../../store";
import toast from "react-hot-toast";
import { CloseOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import emptyBasket from '../../../../public/emptyBasket.png'
import submit from '../../../../public/submit.svg'

function Basket({ setIsBasket, sneakers }) {
  const basketWrapper = useRef();
  const basketItems = useBasket((state) => state.basketItems);
  const setBasketItemsValue = useBasket((state) => state.setBasketItemsValue);
  let isEmpty = basketItems.length > 0 ? false : true;

  let sum = basketItems.reduce((sum, value) => {
    return sneakers[value - 1].price + sum;
  }, 0);

  const submitOrder = () => {
    toast.dismiss();
    toast.success("Заказ успешно оформлен");
    setBasketItemsValue([]);
    setIsBasket(false);
  };

  return (
    <div
      ref={basketWrapper}
      onClick={(e) => {
        if (e.target === basketWrapper.current) {
          setIsBasket(false);
        }
      }}
      className="basketWrapper"
    >
      <div className="basket">
        <h2>
          <span>Корзина</span>
          <Tooltip title="Закрыть корзину">
            <CloseOutlined onClick={() => setIsBasket(false)} />
          </Tooltip>
        </h2>
        {!isEmpty ? (
          <div className="cardList">
            <div className="items">
              {basketItems.map((item) => (
                <BasketCard key={item} item={sneakers[item - 1]} />
              ))}
            </div>
          </div>
        ) : (
          <div className="emptyBasket">
            <img
              src={emptyBasket}
              width={120}
              height={120}
              alt=""
            />
            <h3>Корзин пустая</h3>
            <p className="opacity-4">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ
            </p>
          </div>
        )}

        {!isEmpty ? (
          <div className="basketDown">
            <ul className="basketTotal">
              <li className="d-flex">
                <span>Налог 5%</span>
                <div></div>
                <b>{Math.floor(sum * 0.05)} руб.</b>
              </li>
              <li className="d-flex">
                <span>Итого</span>
                <div></div>
                <b>{sum} руб.</b>
              </li>
            </ul>
            <button className="submit pb-20 pt-20 mt-15" onClick={submitOrder}>
              <span className="ml-30">Оформить заказ</span>
              <img
                className="btnImg mr-30"
                src={submit}
                alt="submit"
              />
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Basket;
