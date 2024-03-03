import { useState } from 'react'
import { StyledRangeWines, FlexRange, Image, Text } from './RangeWines.styled'
import ModalWine from '../ModalWine/ModalWine'
import wines3 from '../../images/wines3.jpg'
import wines4 from '../../images/wines4.jpg'
import winesConthey from '../../data/wines-conthey'
import winesEcrins from '../../data/wines-ecrins'

const RangeWines = (flexStart, width) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedWine, setSelectedWine] = useState(null)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const onSelectedWine = (wine) => {
    setSelectedWine(wine)
    setIsModalOpen(true)
  }

  return (
    <StyledRangeWines>
      <FlexRange flexStart={flexStart}>
        <Image>
          <img src={wines3} alt='Conthey'/>
        </Image>
        <Text>
          <h3>Conthey AOC Valais</h3>
          <ul>
            {winesConthey.map((wine, index) => (
              <li key={index} onClick={() => onSelectedWine(wine)}>
                {wine.title}
              </li>
            ))}
          </ul>
        </Text>
      </FlexRange>
      <FlexRange>
        <Image>
          <img src={wines4} alt='Les Ecrins'/>
        </Image>
        <Text width={width}>
          <h3>Les Ecrins AOC Valais</h3>
          <ul>
            {winesEcrins.map((wine, index) => (
              <li key={index} onClick={() => onSelectedWine(wine)}>
                {wine.title}
              </li>
            ))}
          </ul>
        </Text>
      </FlexRange>
      {isModalOpen && (
        <ModalWine wine={selectedWine} toggleModal={toggleModal}/>
      )}
    </StyledRangeWines>
  )
}

export default RangeWines
