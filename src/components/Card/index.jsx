import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

import { FiHeart, FiEdit3  } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';

import spaguettiImg from '../../assets/spaguetti.png'

import { Button } from '../Button'

export function Card(){

  const  { user } = useAuth();

  return (
    <Container>
        <img src={spaguettiImg} alt="" />
        
        <Link to="/details">
          <h2>Spaguetti Gambe <FaAngleRight/></h2>
        </Link>
        
        <p>Massa fresca com camarões e pesto.</p>

        <span>R$ 25,97</span>

        <div>
          <span> - </span>
          <span> 01 </span>
          <span> + </span>

          <Button title="Incluir"/>
        </div>

        <button className='favorite-btn'>
          <FiHeart/>
        </button>


        <Link to="/edit" className={user.is_admin ? "edit-btn" : "remove"}>
          <FiEdit3/>

        </Link>
        


    </Container>
  )
}