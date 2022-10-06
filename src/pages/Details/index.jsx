import { Container } from './styles';

import { Link } from 'react-router-dom';

import { FaReceipt } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Ingredient } from '../../components/Ingredient';

import spaguettiImg from '../../assets/spaguetti.png'
import { Button } from '../../components/Button';

export function Details(){
  return (
    <Container>
      <Header />
      
      <main>
      
        <Link to="/"><FaAngleLeft/> Voltar</Link>

        <section>

          <div className="img">
            <img src={spaguettiImg} alt="" />
          </div>

          <div className="details">
            <h1>Spaguetti Gambe</h1>
            <h2>Massa fresca com camarões e pesto.</h2>
            <div className="ingredients">
              <Ingredient ingredientName="Camarão" />
              <Ingredient ingredientName="Massa"/>
              <Ingredient ingredientName="Pesto"/>
            </div>

            <div className="order">
              <div className="price">
                <p>R$ 25,97</p>
              </div>

              <div className="amount">
                <span>-</span>
                <span>01</span>
                <span>+</span>
              </div>

              <Button icon={FaReceipt} title="Incluir"/>
            </div>
          </div>
        </section>

      </main>
      
      <footer>
        <Footer/>
      </footer>
    </Container>
  )
}