import { Link } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Container, Content } from "./styles";
import { AiOutlineClockCircle } from 'react-icons/ai'


export function MovieNote(){
  return(
    <Container>

      <Header/>

      <main>
        <Content>
          <Link to="/">
            <ButtonText title ="Voltar"/>
          </Link>
          <div>
            <h1>Interstelar</h1>
            <Rating grade="4" isBigSize/>
          </div>

          <div className="user-post">
            <img src="https://avatars.githubusercontent.com/u/98861755?v=4" alt="Foto do Usuário" />
            <span>Por Mateus Ceni</span>
            <AiOutlineClockCircle/>
            <span>14/06/23 às 19:35pm</span>
          </div>

          <div className="tags">
            <span>Ficção</span>
            <span>Drama</span>
            
          </div>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi delectus, doloremque perspiciatis maiores ex quaerat. 
          Beatae deserunt quis quaerat, dolores temporibus magni adipisci, quas voluptates sed ratione, iure consequatur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae totam nulla expedita deserunt aliquam dolore, 
          perspiciatis vitae vero nostrum aut quo odio reiciendis harum ab laudantium error quos itaque!
          </p>

        </Content>
      </main>

    </Container>
  )
}