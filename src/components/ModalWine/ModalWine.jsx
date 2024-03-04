import { StyledModal, ModalWrapper, Modal, Close, Background } from "./ModalWine.styled"
import { XMarkIcon } from "@heroicons/react/24/solid"

const ModalWine = ({ toggleModal, wine }) => {
  return (
    <StyledModal>
      <ModalWrapper>
        <Modal>
          <Close>
            <XMarkIcon onClick={toggleModal}/>
          </Close>
          <h3>{wine.title}</h3>
          <span>{wine.subtitle1}</span>
          <p>{wine.paragraph1}</p>
          <span>{wine.subtitle2}</span>
          <p>{wine.paragraph2}</p>
          <span>{wine.subtitle3}</span>
          <p>{wine.paragraph3}</p>
        </Modal>
      </ModalWrapper>
      <Background/>
    </StyledModal>
  )
}

export default ModalWine