import React, {useState} from 'react';
import SliderCard from "./SliderCard";
import {SliderContainer} from "../styles/SlyderStyles";

const Slider = () => {

    const cards = [
        <SliderCard color={"yellow"}/>,
        <SliderCard left={"10%"} color={"blue"}/>,
        <SliderCard color={"red"}/>,
        <SliderCard color={"yellow"}/>,
        <SliderCard color={"red"}/>,
        <SliderCard color={"green"}/>,
    ];

    return (
        <div>
            <SliderContainer>
                <SliderCard color={"yellow"} move={"move6-1"}/>
                <SliderCard color={"blue"} move={"move1-2"}/>
                <SliderCard color={"red"} move={"move2-3"}/>
                <SliderCard color={"orange"} move={"move3-4"}/>
                <SliderCard color={"red"} move={"move4-5"}/>
                <SliderCard color={"green"} move={"move5-6"}/>
                <button>button</button>
            </SliderContainer>
        </div>
    );
};

export default Slider;