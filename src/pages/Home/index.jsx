import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container, Slogan } from './styles';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import sloganImg from '../../assets/slogan.png';


export function Home(){

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Container>
      <Header/>
      
      <main>

      
        <Slogan>
          <div>
            <img src={sloganImg} alt="" />
          
            <div className="text">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
            
        </Slogan>

        <section>
          <h3>Pratos principais</h3>

          <Carousel 
            responsive={responsive}
            
          >
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
          </Carousel>
        </section>

        <section>
          <h3>Sobremesas</h3>

          <Carousel 
            responsive={responsive}
            
          >
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
          </Carousel>
        </section>

        <section>
          <h3>Bebidas</h3>

          <Carousel 
            responsive={responsive}
            
          >
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
          </Carousel>
        </section>

      </main>

      <Footer/>
   
    </Container>
  )  
}