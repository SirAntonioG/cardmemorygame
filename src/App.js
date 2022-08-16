import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const cardsGame = [
  { cardId: 1, cardValue: "CARLA", isGuessed: false },
  { cardId: 2, cardValue: "DANIEL", isGuessed: false },
  { cardId: 3, cardValue: "CARLOS", isGuessed: false },
  { cardId: 4, cardValue: "OSCAR", isGuessed: false },
  { cardId: 5, cardValue: "OSCAR", isGuessed: false },
  { cardId: 6, cardValue: "CARLA", isGuessed: false },
  { cardId: 7, cardValue: "CARLOS", isGuessed: false },
  { cardId: 8, cardValue: "CAMILA", isGuessed: false },
  { cardId: 9, cardValue: "DANIEL", isGuessed: false },
  { cardId: 10, cardValue: "CAMILA", isGuessed: false },
  { cardId: 11, cardValue: "SOFIA", isGuessed: false },
  { cardId: 12, cardValue: "SOFIA", isGuessed: false },
];

const App = (props) => {
  const [cards, setCards] = useState(cardsGame);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const handleCardClick = (cardId) => {
    if (cards.every((card) => card.isGuessed === true)) {
      alert("You Win");
    } else {
      const cardAux = cards.find((card) => card.cardId === cardId);
      if (Object.entries(firstCard).length === 0) {
        setFirstCard(cardAux);
      } else if (
        Object.entries(firstCard).length !== 0 &&
        Object.entries(secondCard).length === 0
      ) {
        if (firstCard.cardValue === cardAux.cardValue) {
          firstCard.isGuessed = true;
          cardAux.isGuessed = true;
          setSecondCard(cardAux);
          setCards(
            cards.map((card) => {
              return card.cardId === firstCard.cardId
                ? firstCard
                : card.cardId === secondCard.cardId
                ? secondCard
                : card;
            })
          );
          setFirstCard({});
          setSecondCard({});
        } else {
          setFirstCard({});
          setSecondCard({});
        }
      }
    }
  };
  // console.log("firstCard: ", firstCard);
  // console.log("secondCard: ", secondCard);
  console.log("cards", cards);

  return (
    <>
      <h1>CARD MEMORY GAME</h1>
      <div className="gameStatus">
        <h4>Select two cards</h4>
      </div>
      <div className="container">
        {cards.map((card) => (
          <Card
            id={card.cardId}
            className="card"
            key={card.cardId}
            cardValue={card.cardValue}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </>
  );
};

export default App;
