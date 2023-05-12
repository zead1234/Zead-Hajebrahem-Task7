import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const { default: CardComponent } = require("./CardComponent");

function Cards() {
  const [cards, setCards] = useState([]);
  

  useEffect(() => {
    if (!cards.length) {
      axios
        .get("http://localhost:3000/products", {
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        })
        .then((res) => setCards(res.data));
    }
  }, []);

  
  return (
    <div className="container my-5">
      <div className="row">
        {cards.map((card) => {
          return (
            <div className="col-md-4">
              <CardComponent data={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
