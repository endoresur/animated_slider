import React, {useState} from 'react';
import SliderCard from "./SliderCard";
import {SliderContainer} from "../styles/SlyderStyles";

const Slider = () => {

    let colors = ['yellow', 'blue', 'red', 'yellow', 'red', 'green'];
    let positions = ['move1-2', 'move2-3', 'move3-4', 'move4-5', 'move5-6', 'move6-1'];

    const [step, setStep] = useState(0);
    const [animation, setAnimation] = useState([]);

    function handleChange() {
        let mass = [];
        for(let i = 0; i < colors.length; i++) {
            let pos = (i + step)%6;
            mass.push(positions[pos]);
        }
        setStep((step + 1)%6);
        setAnimation(mass);
    }

    return (
        <div>
            <SliderContainer>
                {
                    animation.map(position =>
                    <SliderCard move={position}/>
                )}
                <button onClick={handleChange}>button</button>
            </SliderContainer>
        </div>
    );
};

export default Slider;