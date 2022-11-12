import { Container, Links, Content } from "./styles"

import { Tag} from "../../components/Tag"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section} from "../../components/Section"
import { ButtonText} from "../../components/ButtonText"

export function Detail(){
  
  return(
    <Container>
      <Header/>
      <main>
        <Content>
        <ButtonText title="Excluir nota"/>
        <h1>Introdução ao React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eligendi totam. Veniam necessitatibus mollitia veritatis minus eum eligendi a in aliquid ad, molestias recusandae praesentium inventore magnam dolores odio architecto!
        Fuga obcaecati, minus harum laboriosam tempore dolores quia recusandae iste alias maxime asperiores quas quidem nulla corrupti blanditiis voluptatem error saepe! Quos doloribus odit voluptates ullam omnis quo maiores amet!
        Optio corporis dolorum sint maxime tenetur officiis voluptas molestiae obcaecati quasi laborum. Aut corrupti accusamus eveniet sunt consequuntur, odit laborum aspernatur error neque, repellendus adipisci voluptates fuga nam minima ad.</p>
          <Section title = "Links úteis">
            <Links>
              <li><a href="#">https://www.google.com.br</a></li>
              <li><a href="#">https://www.google.com.br</a></li>
            </Links>
          </Section>

          <Section title = "Marcadores">
            <Tag title= "express"/>
            <Tag title= "node"/>
          </Section>

          <Button title = "Voltar"/>
        </Content>
      </main>
    </Container>
  )
}