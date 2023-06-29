import { Container, Content, NewMovie } from "./styles"
import { FiPlus } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"
import { Link } from "react-router-dom"

export function Home(){
  return(
    <Container>
      <Header/>
      
      <main>
        <Content>

          <header>
            <div className="titles">
              <h1>Meus filmes</h1>
              <NewMovie to="/new">
                <FiPlus/>
              Adicionar Filme
              </NewMovie>

            </div>
            
          </header>
          <Link to="/note/1">
          <Movie data={{
              title: 'O Justiceiro',
              grade: '4',
              description: `Depois de ver sua família ser assassinada, o veterano de guerra Frank Castle decide se vingar de criminosos, se transformando 
              num vigilante conhecido como Justiceiro.`,
              tags:[
                {id:'1', name: 'Ação'},
                {id:'2', name: 'Drama'},
                {id:'3', name: 'Policial'},
              
              ]
              }}/>
              </Link>
              <Link to="/note/2">
                 <Movie data={{
              title: 'Clube da Luta',
              grade: '4',
              description: `Jack (Edward Norton) é um executivo jovem, trabalha como investigador de seguros, mora confortavelmente, mas ele está 
              ficando cada vez mais insatisfeito com sua vida medíocre. Para piorar ele está enfrentando uma terrível crise de insônia, até que encontra 
              uma cura inusitada para o sua falta de sono ao frequentar grupos de auto-ajuda. Nesses encontros ele passa a conviver com pessoas problemáticas
               como a viciada Marla Singer (Helena Bonham Carter) e a conhecer estranhos como Tyler Durden (Brad Pitt). Misterioso e cheio de ideias, Tyler 
               apresenta para Jack um grupo secreto que se encontra para extravasar suas angústias e tensões através de violentos combates corporais.`,
              tags:[
               
                {id:'1', name: 'Suspense'},
                {id:'2', name: 'Drama'},
                {id:'3', name: 'Ação'},
                
              ]
              }}/>
              </Link>
             
              <Link to="/note/3">
                 <Movie data={{
              title: 'Laranja Mecânica',
              grade: '4',
              description: `No futuro, o violento Alex (Malcolm McDowell), líder de uma gangue de delinquentes que matam, 
              roubam e estupram, cai nas mãos da polícia. Preso, ele recebe a opção de participar em um programa que pode reduzir o seu tempo na cadeia. Alex vira cobaia de experimentos destinados a refrear os impulsos destrutivos do ser humano, mas acaba se tornando impotente para lidar com a violência que o cerca.`,
              tags:[
               
                {id:'1', name: 'Ficção'},
                {id:'2', name: 'Drama'},
             
                
              ]
              }}/>
              </Link>
           
              
        </Content>
      </main>
    </Container>
  )
}