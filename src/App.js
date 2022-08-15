import { useState } from 'react'
import Card from './components/Card'
import './App.css';

const App = (props) => {
  const [cards, setCards] = useState(props.cards);
  const [firstCard, setFirstCard] = useState("");
  const [secondCard, setSecondCard] = useState("");

  const [gameStatus, setGameStatus] = useState("Select two cards");
  const [numberOfCardsSelected, setNumberOfCardsSelected] = useState(0);

  const handleCardClick = () => {
    console.log(this)
  }

  return (
    <>
      <h1>CARD MEMORY GAME</h1>
      <div className="gameStatus"><h4>{gameStatus}</h4></div>
      <div className="container">
      {cards.map( card => 
        <Card id={card.cardId} className="card" key={card.cardId} cardValue={card.cardValue} onClick={handleCardClick}/>
      )}
    </div>
    </>
  );
}

export default App;
