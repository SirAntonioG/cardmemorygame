import React from "react";

const Card = (props) => {
  return (
    <div
      id={`card-${props.id}`}
      className={props.className}
      onClick={(e) => props.onClick(props.id, props.className)}
    >
      <span className={props.spanClassName}>{props.cardValue}</span>
    </div>
  );
};

export default Card;
