import styled from "styled-components";
import {positions} from "./Positions";


const Card = styled.div`
  position: absolute;
  left: 25%;
  z-index: ${props => props.zi || '4'};

  width: 600px;
  height: 400px;
  border-radius: 10px;

  background-color: ${props => props.color || 'yellow'};
  opacity: .6;

  margin: 0 auto;

  
  animation: ${props => props.move || 'move6-1'} 2s forwards;


  @keyframes move1-2 {
    from {${positions.position1}}
    to {${positions.position2}}
  }

  @keyframes move2-3 {
    from {${positions.position2}}
    to {${positions.position3}}
  }

  @keyframes move3-4 {
    from {${positions.position3}}
    to {${positions.position4}}
  }

  @keyframes move4-5 {
    from {${positions.position4}}
    to {${positions.position5}}
  }

  @keyframes move5-6 { 
    from {${positions.position5}}
    to {${positions.position6}}
  }

  @keyframes move6-1 {
    from {${positions.position6}}
    to {${positions.position1}}
  }
  
   

`



export {Card};