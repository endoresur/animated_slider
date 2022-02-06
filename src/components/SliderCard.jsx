import React from 'react';
import {Card} from '../styles/SliderCardStyles'

const SliderCard = (props) => {
    const color = props.color;
    const move = props.move;
    const word = props.word;

    return (
        <Card move={move} color={color}>
            <div>{word}</div>
        </Card>
    );
};

export default SliderCard;