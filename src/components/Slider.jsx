import React, {useEffect, useState} from 'react';
import SliderCard from "./SliderCard";
import {ButtonContainer, Container, SliderContainer} from "../styles/SlyderStyles";

const Slider = () => {

    const cards = [<SliderCard/>,];

    let colors = ['yellow', 'blue', 'red', 'yellow', 'red', 'green'];
    let positions = ['move1-2', 'move2-3', 'move3-4', 'move4-5', 'move5-6', 'move6-1'];

    const [step, setStep] = useState(0);
    const [animation, setAnimation] = useState(cards);
    const [direction, setDirection] = useState('right');

    function handleChange() {
        let mass = [];
        for (let i = 0; i < positions.length; i++) {
            let pos = (i + step) % 6;
            mass.push(positions[pos]);
        }
        setStep((step + 1) % 6);
        setAnimation(mass);
    }

    useEffect(() => {
        handleChange();
    }, []);

    const buttonStyle = {
        border: 'none',
    }

    return (
        <Container>
            <ButtonContainer>
                <button onClick={(event) =>{
                    setDirection('left');
                    handleChange();
                }} style={buttonStyle}>{'<'}</button>
            </ButtonContainer>
            <SliderContainer>
                {
                    animation.map(function (pos, i) {
                            return <SliderCard 
                                key={i}
                                color={colors[i]}
                                move={pos} 
                                word={positions[i]}
                                direction={direction}/>
                        }
                    )}
            </SliderContainer>
            <ButtonContainer>
                <button onClick={() => {
                    setDirection('right');
                    handleChange();
                }} style={buttonStyle}>{'>'}</button>
            </ButtonContainer>
        </Container>
    );
};

export default Slider;