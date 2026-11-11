import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import {
  FullHeightLayout,
  Main,
  Text,
  Code,
  WrapperButton,
} from './NotFound.styled'

const NotFound = () => {
  return (
    <>
      <FullHeightLayout />
      <Header />
      <Main>
        <Text>
          <Code>404</Code>
          <h2>Page introuvable</h2>
          <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
          <WrapperButton>
            <Button as={Link} to='/' text="Retour à l'accueil" />
          </WrapperButton>
        </Text>
      </Main>
    </>
  )
}

export default NotFound
