//import React, { useState } from "react";
//import { useEffect } from "react";
//import { getWeather } from "../../service";
import { CardsContext } from "../../contexts/CardsContext";
import { useContext } from "react";

const Home = () => {
  const { cards } = useContext(CardsContext);

  return (
    <>
      <div>
        {cards.map((card) => {
          return (
            <div>
              <h5>Ciudad: {card.name}</h5>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
