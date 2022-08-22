import React from "react";

const Card = (props) => {
  const classes = props.isGuessed ? "card card-selected" : "card";
  const cardId = props.id;
  const firstCardId = props.firstCard.cardId;
  const isEqualFirstCard = cardId === firstCardId;
  const hiddenClass = isEqualFirstCard ? "visible" : "hidden";
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
