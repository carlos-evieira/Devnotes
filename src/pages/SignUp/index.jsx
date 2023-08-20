import { useState } from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import{ Link, useNavigate } from 'react-router-dom'



import { api } from '../../services/api'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Container, Form, Background } from './styles'


export function  SignUp(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
     return alert("Preencha todos os campos")
    }

// se todos os campos forem preenchidos, acessamos api através da rota para criar usuário e enviamos um objeto com os dados do usuário
    api.post("/users", {name, email, password})
    .then(() => { 
      alert("Usuário cadastrado com sucesso!") // se der certo aparece mensagem de sucesso 
      navigate("/") // após cadastro do usuário, leva para a página de login
    }) 
    .catch( error => {
      if(error.response){ //se der erro , verifica-se se o erro veio junto com um response do backend
        alert(error.response.data.message) // coloca-se dinamicamente uma das respostas de erro já tratadas no backend
      } else{
        alert("Não foi possível cadastrar o usuário") // se não veio com response, retornar uma resposta genérica
      }
    } )
  }

  return(
    <Container>
      <Background />
      <Form>
        <h1>DevNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua Conta</h2>

        <Input 
          placeholder = "Nome"
          type = "text"
          icon={FiUser}
          onChange = {e => setName(e.target.value) }
        />
        <Input 
          placeholder = "E-mail"
          type = "text"
          icon={FiMail}
          onChange = {e => setEmail(e.target.value) }
        />

        <Input 
          placeholder = "Senha"
          type = "password"
          icon={FiLock}
          onChange = {e => setPassword(e.target.value) }
        />

        <Button title="Cadastrar" onClick = {handleSignUp} />

        <Link to="/">
          Fazer Login
        </Link>

      </Form>

    </Container>
  )
}