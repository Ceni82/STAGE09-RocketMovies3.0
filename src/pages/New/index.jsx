import { Container, Content } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { MovieItem } from "../../components/MovieItem"
import { Link } from "react-router-dom";


export function New(){
  return(
    <Container>
      
      <Header/>
      
      <main>
        <Content>

          <Link to="/">
            <ButtonText title ="Voltar"/>
          </Link>
          
          <h1>Meus Filmes</h1>

          <div className="inputs">
            <Input placeholder="Filme"/>
            <Input placeholder="Avaliação (0-5)"/>
          </div>

          <TextArea placeholder="Observações"/>
          
          <Section title="Marcadores">
            <div className="tags">
              <MovieItem value ="Ficção" />
              <MovieItem isNew placeholder="Add Nova"/>
            </div>
          </Section>
          <div>
            <Button 
              title="Excluir filme" 
            />

            <Button 
              title="Salvar alterações" 
            />
          </div>

        </Content>
      
      </main>

    </Container>
  )
}