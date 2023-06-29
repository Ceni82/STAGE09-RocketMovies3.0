import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiUser, FiLock, FiCamera } from "react-icons/fi";



export function Profile(){
  return(
    <Container>
      <header>
        <Link to="/">
          <ButtonText title='Voltar'/>
        </Link>
      </header>

      <Form>
      <Avatar>
        <img src="https://github.com/Ceni82.png" alt="Imagem do usuário" />
        <label htmlFor="avatar">
          <FiCamera/>
          <input 
          type="file" 
          id="avatar"
          />
        </label>
      </Avatar>
      <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
        />

        <Input
        placeholder="Email"
        type="text"
        icon={FiMail}
        />

        <Input
        placeholder="Senha atual"
        type="password"
        icon={FiLock}/>

        <Input
        placeholder="Nova senha"
        type="password"
        icon={FiLock}/>

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}