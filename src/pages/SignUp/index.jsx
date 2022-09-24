import { Container, Form } from './styles';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp(){
  return (
    <Container>
      <div>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
        <h1>food explorer</h1>
      </div>

        <Form>
          <h1>Crie sua conta</h1>

          <Input 
            title="Nome"
            label="name"
            placeholder="Exemplo: Rafael Bento"
          />


          <Input
            title="Email"
            label="email"
            placeholder="exemplo@exemplo.com.br"
          />

          <Input
            title="Senha"
            label="password"
            placeholder="No mínimo 6 caracteres"
          />

          <Button 
            title="Criar sua conta"
          />

          <a href="#">Já tenho uma conta</a>

        </Form>

    </Container>
  )
}