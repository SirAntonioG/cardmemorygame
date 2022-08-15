import React from 'react';

const Card = (props) => {
    return (
        <div id={props.id} className={props.className} onClick={props.onClick}>
            {props.cardValue}
        </div>
    )
}

export default Card;