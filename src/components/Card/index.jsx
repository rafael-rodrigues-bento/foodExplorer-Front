import { useState } from 'react';
import { FiHeart, FiEdit3, FiTrash  } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';

import { Button } from '../Button'

export function Card({ data }){
  const imgURL = `${api.defaults.baseURL}/files/${data.img}`

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

  function handleFavoriteDish(){
    alert("Recurso será adicionado em breve!")
  }

  const  { user } = useAuth();
  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  function handleEditDish(id){
    navigate(`/edit/${id}`);
  }

  async function handleRemoveDish(){
    const confirm = window.confirm("Você deseja excluir esse prato do menu ?")

    if(confirm){
      await api.delete(`/dishes/${data.id}`)
      location.reload()
    }
  }

  return (
    <Container>
        <img src={imgURL} alt={data.title} />
        
        <button onClick={() => handleDetails(data.id)}>
          <h2>{data.title} <FaAngleRight/></h2>
        </button>
        
        <p>{data.description}</p>

        <span>R$ {data.price}</span>

        <div className='quantity-order'>
          <button className='less-btn' onClick={changeLessQuantity}> - </button>
          <span> {quantity <= 9 ? 0 : ""}{quantity} </span>
          <button className='more-btn' onClick={changeMoreQuantity}> + </button>

          <Button onClick={handleNewOrder} title="Incluir"/>
        </div>

        { user.is_admin ?

          <button onClick={handleRemoveDish} className='favorite-btn'>
            <FiTrash/>
          </button>

              :

          <button onClick={handleFavoriteDish} className='favorite-btn'>
            <FiHeart/>
          </button> 
        }

        <button  onClick={() => handleEditDish(data.id)} className={user.is_admin ? "edit-btn" : "remove"}>
          <FiEdit3/>
        </button>
    </Container>
  )
}