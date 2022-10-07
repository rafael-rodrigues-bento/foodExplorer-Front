import { useState } from 'react';

import { FaAngleLeft } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { IngredientItem } from '../../components/IngredientItem';
import { TextArea } from '../../components/TextArea';
import { Input } from '../../components/Input';

import { Container, TagWrapper, InputWrapper } from './styles';

export function New(){

  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState("");

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));

  }

  return (
    <Container>
      <Header/>
      <main>
        <Link to="/"><FaAngleLeft/> Voltar</Link>

        <h1>Criar prato</h1>

        <form>
          <InputWrapper>
            <div>
              <label id="file" htmlFor="image">
                Imagem do prato
              <div className='input-file-wrapper'>
                <FiUpload size={24}/>
                <span>Selecione a imagem</span>
                <input id="image" type="file"/>
              </div>
              </label>
            </div>
              <Input 
                label="name" 
                title="Nome do prato" 
                type="text" 
                placeholder="Ex.: Salada Ceasar"
              />

              <Input
                label="category"
                title="Categoria"
                type="text"
                placeholder="Ex: Pratos principais"
              />
            </InputWrapper>

            <InputWrapper>
              <div>
                <label htmlFor="dish-ingredient">Ingredientes</label>            
                <TagWrapper>

                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientItem
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }
                  
                  <IngredientItem
                    isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                   />
                  
                </TagWrapper>
              </div>
              

              <Input 
                label="price"
                title="Preço"
                type="text"
                placeholder="R$ 00,00"
              />
            </InputWrapper>
          
            

            

          <div>
            <label htmlFor="dish-description">Descrição</label>
            <TextArea/>
          </div>

          <div className='submit-btn-wrapper'>
            <button className='submit-btn'>
              Adicionar prato
            </button>
          </div>
          
        </form>

      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}