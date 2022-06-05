import Header from '../../components/Header/Header'
import TopImage from '../../components/TopImage/TopImage'
import domain2 from '../../images/domain2.jpg'
import {
  Container,
  ContainerSmall,
} from '../../components/Container/Container.styled'
import { Text, MiddleImage, WrapperButton } from './Domain.styled'
import domain3 from '../../images/domain3.jpg'
import Button from '../../components/Button/Button'

const Domain = () => {
  return (
    <>
      <Header />
      <TopImage src={domain2} alt={'Claire-Lise'} />
      <Container>
        <ContainerSmall>
          <Text>
            <h2>L’histoire du domaine</h2>
            <p>
              Créé par mes parents en 1976, le domaine compte 3,5 hectares et
              s'épanouit exclusivement sur les pentes ensoleillées de la commune
              de Conthey, au cœur de la Vallée du Rhône. Il s'étend du premier
              coteau avec les appellations de Champmarais et Tricrètes, pour
              monter jusqu'à 800m d'altitude aux Rayes, en passant par le Plan
              d'Avé et Les Granges. Si l'encépagement fait la part belle au
              patrimoine viticole du Valais, il a su s'ouvrir de manière
              réfléchie sur les délices des régions voisines. Il se partage en
              12 variétés: traditionnelles (Fendant, Johannisberg, Pinot Noir,
              Gamay), autochtones (Petite Arvine, Païen, Diolinoir) et
              françaises (Merlot, Syrah, Cabernet Franc).
            </p>
            <p>
              Les socles rocheux qui soutiennent le vignoble sont principalement
              composés de feuillets de schistes (calschistes et schistes
              argileux), couramment appelés «brisés». La dominance calcaire du
              sol privilégie l'expression de vins tout en finesse. Un soin
              particulier est apporté à résoudre la complexe adéquation entre
              sol-cépage-exposition-altitude car nous sommes de ceux qui pensent
              que le vin s'imagine et se crée avant tout à la vigne.
            </p>
          </Text>
          <MiddleImage>
            <img src={domain3} alt='Le domaine' />
          </MiddleImage>
          <Text>
            <p>
              Désireux de créer des vins expressifs, vivants et de caractère,
              nous travaillons notre domaine sans l'utilisation de produits
              phytosanitaires de synthèse et mettons en œuvre des méthodes de
              gestion du sol afin de limiter l'impact de nos interventions. Et
              comme nous vinifions chaque parchet individuellement, nous pouvons
              traduire dans vos verres, ce complexe mariage entre cépage et
              terroir, et ainsi proposer des crus au caractère unique et marqué.
              Pour une qualité de production optimum et par respect pour ce
              patrimoine, nos vignes sont entièrement vendangées manuellement.
              L’entreprise est certifiée bio.
            </p>
            <p>
              Mais la Cave la Colombe est surtout une affaire de famille. Épaulé
              par ma mère Marie-France au bureau et par mon père Georgy à la
              vente, je peux également compter sur ma compagne Claire-Lise Duc,
              elle aussi viticultrice. Et dès que la saison bat son plein, ce
              sont les frères Gomes, Nelson et João, qui viennent compléter
              l'équipe.
            </p>
          </Text>
        </ContainerSmall>
        <WrapperButton>
          <Button as='a' href='/visite' text='Contactez-nous' />
        </WrapperButton>
      </Container>
    </>
  )
}

export default Domain
