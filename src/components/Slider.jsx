import React from 'react';
import SliderCard from "./SliderCard";
import {SliderContainer} from "../styles/SlyderStyles";

const Slider = () => {
    return (
        <SliderContainer>
            <SliderCard/>
            <SliderCard left={"10%"}/>
        </SliderContainer>
    );
};

export default Slider;