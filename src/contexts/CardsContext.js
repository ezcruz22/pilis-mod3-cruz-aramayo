import { createContext, useState } from "react";

export const CardsContext = createContext({
  cards: [],
  setCards: () => {},
});

export const CardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const value = { cards, setCards };

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
};
