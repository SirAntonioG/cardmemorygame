import React from "react";

const Card = (props) => {
  const classes = props.isGuessed ? "card card-selected" : "card";
  const cardId = props.id;
  const firstCardId = props.firstCard.cardId;
  const secondCardId = props.secondCard.cardId;
  const isEqualCard = cardId === firstCardId || cardId === secondCardId;
  let hiddenClass = isEqualCard ? "visible" : "hidden";
  if (props.isGuessed) {
    hiddenClass = "visible";
  }

  return (
    <div
      id={`card-${props.id}`}
      className={classes}
      onClick={(e) => props.onClick(props.id)}
    >
      <span className={hiddenClass}>{props.cardValue}</span>
    </div>
  );
};

export default Card;
