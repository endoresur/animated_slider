import styled from "styled-components";

const position1 = '';
const position2 = 'transform: translateX(-60%) perspective(1000px) rotateY(-70deg) translateX(-50%);';
const position3 = 'transform: translateX(-90%) perspective(200px) rotateY(-170deg) translateX(-80%) translateZ(110px);';
const position4 = 'transform:  perspective(1000px) rotateY(180deg) translateZ(700px);';
const position5 = 'transform: translateX(90%) perspective(200px) rotateY(170deg) translateX(80%) translateZ(110px);';
const position6 = 'transform: translateX(60%) perspective(1000px) rotateY(70deg) translateX(50%);';

const Card = styled.div`
  position: absolute;
  left: ${props => props.left || '30%'};
  z-index: ${props => props.zi || '4'};

  width: 600px;
  height: 400px;
  border-radius: 10px;

  background-color: ${props => props.color || 'yellow'};
  opacity: 0.5;

  margin: 0 auto;

  animation: ${props => props.move || 'move6-1'} 2s forwards;


  @keyframes move1-2 {
    from {${position1}}
    to {${position2}}
  }

  @keyframes move2-3 {
    from {${position2}}
    to {${position3}}
  }

  @keyframes move3-4 {
    from {${position3}}
    to {${position4}}
  }

  @keyframes move4-5 {
    from {${position4}}
    to {${position5}}
  }

  @keyframes move5-6 { 
    from {${position5}}
    to {${position6}}
  }

  @keyframes move6-1 {
    from {${position6}}
    to {${position1}}
  }

`



export {Card};