import React from "react";

const Card = (props) => {
  return (
    <div
      id={`card-${props.id}`}
      className={props.className}
      onClick={(e) => props.onClick(props.id, props.className)}
    >
      {props.cardValue}
    </div>
  );
};

export default Card;
