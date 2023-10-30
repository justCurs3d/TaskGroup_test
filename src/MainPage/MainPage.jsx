import React, { useEffect } from "react";
import "./MainPage.sass";
import MyHeader from "./components/MyHeader/MyHeader";
import Content from "./components/Content/Content";
import Basket from "./components/Basket/Basket";
import { useAuth, useBasket } from "../store";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import file1 from '../../public/sneakers/1.jpg'
import file2 from '../../public/sneakers/2.jpg'
import file3 from '../../public/sneakers/3.jpg'
import file4 from '../../public/sneakers/4.jpg'
import file5 from '../../public/sneakers/5.jpg'
import file6 from '../../public/sneakers/6.jpg'
import file7 from '../../public/sneakers/7.jpg'
import file8 from '../../public/sneakers/8.jpg'

const sneakers = [
  {
    id: 1,
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    file: file1,
  },
  {
    id: 2,
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    file: file2
  },
  {
    id: 3,
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    file: file3
  },
  {
    id: 4,
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    file: file4
  },
  {
    id: 5,
    name: "Мужские Кроссовки Under Armour Curry 8",
    price: 15199,
    file: file5
  },
  {
    id: 6,
    name: "Мужские Кроссовки Nike Kyrie 7",
    price: 11299,
    file: file6
  },
  {
    id: 7,
    name: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 10799,
    file: file7
  },
  {
    id: 8,
    name: "Мужские Кроссовки Nike LeBron XVIII",
    price: 16499,
    file: file8
  },
];

function MainPage() {
  const [isBasket, setIsBasket] = React.useState(false);
  const isAuth = useAuth((state) => state.isAuth);
  const navigate = useNavigate();
  const basketItems = useBasket((state) => state.basketItems);
  // const setBasketItemsValue = useBasket((state) => state.setBasketItemsValue);

  useEffect(() => {
    localStorage.setItem("basketItems", basketItems);
  }, [basketItems]);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {isAuth && (
        <div className="wrapper clear">
          <div>
            <MyHeader setIsBasket={setIsBasket} sneakers={sneakers} />
            <Content sneakers={sneakers} />
            {isBasket && (
              <Basket setIsBasket={setIsBasket} sneakers={sneakers} />
            )}
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
}

export default MainPage;
