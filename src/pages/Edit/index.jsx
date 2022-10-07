import { useState } from 'react';

import { FaAngleLeft } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { IngredientItem } from '../../components/IngredientItem';
import { TextArea } from '../../components/TextArea';
import { Input } from '../../components/Input';

import { Container, TagWrapper, InputWrapper } from './styles';

export function Edit(){

  const [ imgFile, setImgFIle ] = useState(null)
  const [ title, setTitle ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ price, setPrice ] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const { user } = useAuth();

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("");
  };

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  };

  async function handleNewDish() {
    if (!imageFile) {
      return alert("Adicione uma imagem para o prato")
    }
    if (!title) {
      return alert("Adicione um titulo para o prato")
    }
    if (!description) {
      return alert("Adicione uma descrição para o prato")
    }
    if (!category) {
      return alert("Adicione um categoria para o prato")
    }
    if (!price) {
      return alert("Adicione um preço para o prato")
    }
    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }
    if (ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente")
    }

  return (
    <Container>
      <Header/>
      <main>
        <Link to="/"><FaAngleLeft/> Voltar</Link>

        <h1>Editar prato</h1>

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
                  {ingredients.map((ingredient, index) => (
                    <IngredientItem
                      key={String(index)}
                      onChange={(e) => setNewIngredient(e.target.value)}
                      value={ingredient}
                      onClick={() => {}}
                    />
                  ))}
                  <IngredientItem
                    isNew
                    placeholder="Adicionar"
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={newIngredient}
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
}}