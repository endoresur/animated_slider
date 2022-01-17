import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
`

const SliderContainer = styled.div`
  padding-top: 100px;
`

const ButtonContainer = styled.div`
  display: grid;  
  justify-content: center;
  align-items: center;
`

export {SliderContainer, ButtonContainer, Container}