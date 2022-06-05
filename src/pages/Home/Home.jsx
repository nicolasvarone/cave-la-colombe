import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import {
  Container,
  ContainerSmall,
} from '../../components/Container/Container.styled'
import { Title, WrapperButton } from './Home.styled'
import Categories from '../../components/Categories/Categories'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <>
      <Header position='absolute' color='light' />
      <Hero />
      <Container>
        <ContainerSmall>
          <Title>
            <span>Depuis 1976</span>
            <h1>
              Domaine familial
              <br />
              de vignerons passionnés
            </h1>
            <p>
              Nous travaillons notre domaine situé sur la commune de Conthey, au
              cœur du Valais, depuis bientôt 50 ans. Aujourd’hui converti à la
              production biologique, nous mettons tout en œuvre pour produire
              des vins uniques et personnels afin de ravir aussi bien les
              papilles expertes qu’amatrices.
            </p>
          </Title>
        </ContainerSmall>
        <Categories />
        <WrapperButton>
          <Button as='a' href='/visite' text='Contactez-nous' />
        </WrapperButton>
      </Container>
    </>
  )
}

export default Home
