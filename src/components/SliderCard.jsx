import React from 'react';
import {Card} from '../styles/SliderCardStyles'

const SliderCard = (props) => {
    const left = props.left;
    const color = props.color;
    const move = props.move;
    return (
        <Card left={left} color={color} move={move}>
            123
        </Card>
    );
};

export default SliderCard;