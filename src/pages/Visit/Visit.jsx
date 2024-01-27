import Header from '../../components/Header/Header'
import TopImage from '../../components/TopImage/TopImage'
import visit2 from '../../images/visit2.jpg'
import {
  Container,
  ContainerSmall,
} from '../../components/Container/Container.styled'
import { Text } from './Visit.styled'
import Contact from '../../components/Contact/Contact'

const Visit = () => {
  return (
    <>
      <Header />
      <TopImage src={visit2} alt='Bateau' />
      <Container>
        <ContainerSmall>
          <Text>
            <h2>Venez nous rencontrer</h2>
            <p>
              Vous pouvez nous rendre visite pour une dégustation sur simple
              rendez-vous (079 679 20 05).
            </p>
            <p>
              Vous pouvez également nous retrouver dans un des évènements
              auxquels nous participons:
            </p>
            <ul>
              <li>
                <span>Bâle:</span> Wyschiff (du 14 au 17 mars 2024,{' '}
                <a
                  href='https://www.wyschiff.ch/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
              <li>
                <span>Lucerne:</span> Wyschiff (du 21 au 24 mars 2024,{' '}
                <a
                  href='https://www.wyschiff.ch/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
              <li>
                <span>Conthey:</span> Caves ouvertes des vins du Valais (du 9 au 11 mai 2024,{' '}
                <a
                  href='https://www.wyschiff.ch/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
              <li>
                <span>Lausanne:</span> Wyschiff (novembre 2024,{' '}
                <a
                  href='https://www.wyschiff.ch/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
            </ul>
          </Text>
        </ContainerSmall>
        <Contact />
      </Container>
    </>
  )
}

export default Visit
