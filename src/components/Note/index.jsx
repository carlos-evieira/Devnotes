import { Tag } from '../Tag'
import { Container} from './styles'

export function Note({data, ...rest}){
 return(
    <Container {...rest}>
    <h1>{data.title}</h1>

    {
      data.tags && //renderiza as tags se elas existirem
      <footer>
        {
          data.tags.map(tag=> <Tag key={tag.id} title={tag.name} />)
        }
      </footer>
    }

    
    </Container>
 )
}