import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const cards = [
  {cardId: 1, cardValue: "CARLA", isGuessed: false},
  {cardId: 2, cardValue: "DANIEL", isGuessed: false},
  {cardId: 3, cardValue: "CARLOS", isGuessed: false},
  {cardId: 4, cardValue: "OSCAR", isGuessed: false},
  {cardId: 5, cardValue: "OSCAR", isGuessed: false},
  {cardId: 6, cardValue: "CARLA", isGuessed: false},
  {cardId: 7, cardValue: "CARLOS", isGuessed: false},
  {cardId: 8, cardValue: "CAMILA", isGuessed: false},
  {cardId: 9, cardValue: "DANIEL", isGuessed: false},
  {cardId: 10, cardValue: "CAMILA", isGuessed: false},
  {cardId: 11, cardValue: "SOFIA", isGuessed: false},
  {cardId: 12, cardValue: "SOFIA", isGuessed: false},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App cards={cards}/>
  </React.StrictMode>
);

