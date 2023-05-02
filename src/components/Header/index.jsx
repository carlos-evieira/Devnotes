import {RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout} from './styles'

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/carlos-evieira.png" alt="Foto do usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>Kadu Vieira</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}