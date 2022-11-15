import { StyledFooter, WrapperFooter } from './Footer.styled'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <StyledFooter>
      <WrapperFooter>
        <p>© 2022, La Colombe SA, Tous droits réservés</p>
        <a
          href='https://www.facebook.com/CaveLaColombe'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook />
        </a>
      </WrapperFooter>
    </StyledFooter>
  )
}
export default Footer
