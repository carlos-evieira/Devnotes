import { FiPlus, FiSearch} from 'react-icons/fi';
import{ Container, Brand, Menu, Search, Content, NewNote} from './styles'

import{ Header } from '../../components/Header'
import{ Input } from '../../components/Input'
import{ Section } from '../../components/Section'
import{ Note } from '../../components/Note'
import{ ButtonText } from '../../components/ButtonText'

export function Home(){
	return (
		<Container>
			<Brand>
				<h1>Devnotes</h1>
			</Brand>

			<Header />

			<Menu>
				<li><ButtonText title= "Todos" isActive/></li>
				<li><ButtonText title= "React"/></li>
				<li><ButtonText title= "NodeJs"/></li>

			</Menu>


			<Search>
				<Input placeholder="Pesquisar pelo título"  icon={FiSearch}/>

			</Search>

			<Content>
				<Section title="Minhas Notas">
					<Note data = {{
						title: 'React Modal Exemplo de Middleware',
						tags: [
							{id: '1', name: 'react'},
							{id: '2', name: 'nodejs'}
						]
					}} /> 
				</Section>

			</Content>

			<NewNote>
				<FiPlus />
				Criar nota

			</NewNote>

		</Container>

)
}




