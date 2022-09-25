import { Container } from './styles';

import { FiHeart } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';

import spaguettiImg from '../../assets/spaguetti.png'

import { Button } from '../Button'

export function Card(){
  return (
    <Container>
        <img src={spaguettiImg} alt="" />
        
        <a href="#">
          <h2>Spaguetti Gambe <FaAngleRight/></h2>
        </a>
        
        <p>Massa fresca com camarões e pesto.</p>

        <span>R$ 25,97</span>

        <div>
          <span> - </span>
          <span> 01 </span>
          <span> + </span>

          <Button title="Incluir"/>
        </div>

        <button>
          <FiHeart/>
        </button>

    </Container>
  )
}