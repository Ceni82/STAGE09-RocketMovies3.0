import { Input } from "../Input";
import { Container, Profile, Search, Brand} from "./styles";
import { Link } from 'react-router-dom';

export function Header(){
  return(
    <Container>

      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar"/>
      </Search>
      
      <Profile to="/profile">
          <div>
            <strong>Mateus Ceni</strong>
            <Link to="/">
              Sair
            </Link>
          </div>
          <img src="https://github.com/Ceni82.png" alt="Foto do usuario gabrielriomar" />
      </Profile>
    </Container>
  )
}