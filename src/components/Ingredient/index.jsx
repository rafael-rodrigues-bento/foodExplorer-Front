import { Container } from "./styles";

import appleImg from '../../assets/ingredients/apple.png';

export function Ingredient(){
  return (
    <Container>
      <img src={appleImg} alt="" />
      <p>Maçã</p>
    </Container>
  )
}