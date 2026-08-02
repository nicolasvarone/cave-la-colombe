import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Overlay,
  Modal,
  Logo,
  Text,
  Actions,
  Action,
} from './AgeModal.styled'
import logo from '../../images/logo.svg'
import { SHOP_URL } from '../../data/shop'

const AgeModal = ({ onClose }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      body.style.overflow = 'unset'
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  const onAdult = () => {
    window.open(SHOP_URL, '_blank', 'noreferrer')
    onClose()
  }

  const onMinor = () => {
    onClose()
    navigate('/')
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <Logo src={logo} alt='Logo cave la colombe' />
        <Text>
          Pour accéder à notre site de vente en ligne, merci de confirmer que
          vous avez l’âge requis pour acheter du vin (+16 ans)
        </Text>
        <Actions>
          <Action onClick={onAdult}>Je suis majeur·e</Action>
          <Action variant='secondary' onClick={onMinor}>
            Je suis mineur·e
          </Action>
        </Actions>
      </Modal>
    </Overlay>
  )
}

export default AgeModal
