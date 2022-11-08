import { useState, useEffect } from 'react';
import { FaReceipt, FaAngleLeft } from 'react-icons/fa';
import { Container } from './styles';

import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Ingredient } from '../../components/Ingredient';
import { Button } from '../../components/Button';

export function Details(){

  const [ data, setData ] = useState(null);

  const [ quantity, setQuantity ] = useState(1);

  function changeMoreQuantity(){
    setQuantity(quantity + 1)
  }

  function changeLessQuantity(){
    setQuantity(quantity >= 2 ? quantity - 1 : quantity)
  }

  function handleNewOrder(){
    alert("Este recurso será adicionado em breve!")
  }

  const params = useParams();
  const imgURL = data && `${api.defaults.baseURL}/files/${data.img}`;

  const navigation = useNavigate();

  function handleBack(){
    navigation(-1);
  }

  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, [])

  return (
    <Container>
      <Header />
      
      { data &&
        <main>
      
          <button onClick={handleBack}><FaAngleLeft/> Voltar</button>

          <section>

            <div className="img">
              <img src={imgURL} alt="" />
            </div>

            <div className="details">
              <h1>{data.title}</h1>
              <h2>{data.description}</h2>
            <div className="ingredients">
              {
                data.ingredients.map(ingredient => (
                  <Ingredient key={String(ingredient.id)} ingredientName={ingredient.name} />
                ))
              }
            </div>

            <div className="order">
              <div className="price">
                <p>R$ {data.price}</p>
              </div>

              <div className="amount">
                <button className='less-btn' onClick={changeLessQuantity}> - </button>
                <span> {quantity <= 9 ? 0 : ""}{quantity} </span>
                <button className='more-btn' onClick={changeMoreQuantity}> + </button>
              </div>

              <Button onClick={handleNewOrder} icon={FaReceipt} title="Incluir"/>
            </div>
          </div>
        </section>

      </main>
      }
      
      <footer>
        <Footer/>
      </footer>
    </Container>
  )
}