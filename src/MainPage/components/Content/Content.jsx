import { useState } from "react";
import Card from "../Card/Card";
import "./Content.sass";



function Content({sneakers}) {
  return (
    <div className="content p-40">
      <div className="mb-40">
        <h1>Все кроссовки</h1>
      </div>

      <div style={{ flexWrap: "wrap" }} className="cards d-flex">
        {
          sneakers.map(item => <Card item={item} key={item.id} />)
        }
      </div>
    </div>
  );
}

export default Content;
