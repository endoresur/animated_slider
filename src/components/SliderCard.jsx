import React from 'react';
import {Card} from '../styles/SliderCardStyles'

const SliderCard = (props) => {
    const color = props.color;
    const move = props.move;
    return (
        <Card color={color} move={move}>
            123
        </Card>
    );
};

export default SliderCard;