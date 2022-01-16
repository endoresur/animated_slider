import styled from "styled-components";

const Card = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.left || '30%'};
  z-index: ${props => props.zi || '4'};


  width: 500px;
  height: 300px;
  border-radius: 10px;

  background-color: yellow;
  opacity: 0.7;

  margin: 0 auto;
`

export {Card};