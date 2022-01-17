import React from 'react';
import {Card} from '../styles/SliderCardStyles'

const SliderCard = (props) => {
    const move = props.move;
    const word = props.word;

    return (
        <Card move={move}>
            <div>{word}</div>
        </Card>
    );
};

export default SliderCard;