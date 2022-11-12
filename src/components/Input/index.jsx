import { Container } from './styles'

export function Input({icon: Icon, ...rest}){
  return(
    <Container>
      {/* só vai mostrar o icone se algum ícone existir de fato */}
      {Icon && <Icon size={20} />}

      <input  {...rest} />
      
    </Container>
  )
}