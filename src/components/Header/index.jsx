import { FaPowerOff } from "react-icons/fa";
import { Container, Profile, Logout } from './styles'

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src='https://github.com/carlos-evieira.png'
          alt= "foto do usuário"
        />
        <div>
          <span>Olá,</span>
          <strong>Carlos Eduardo Vieira</strong>
        </div>
      </Profile>
      <Logout >
        <FaPowerOff />
      </Logout>
      
    </Container>
  )
}