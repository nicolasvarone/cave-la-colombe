import { StyledRangeWines, FlexRange, Image, Text } from './RangeWines.styled'
import wines3 from '../../images/wines3.jpg'
import wines4 from '../../images/wines4.jpg'

const RangeWines = (flexStart, width) => {
  return (
    <StyledRangeWines>
      <FlexRange flexStart={flexStart}>
        <Image>
          <img src={wines3} alt='Conthey' />
        </Image>
        <Text>
          <h3>Conthey AOC Valais</h3>
          <ul>
            <li>Conthey Vieilles Vignes</li>
            <li>Tricrètes Vieille Vigne</li>
            <li>Johannisberg</li>
            <li>Intchié No Blanc</li>
            <li>Rosé Charme</li>
            <li>Dôle blanche</li>
            <li>Intchié No Rose</li>
            <li>Gamay Vieille Vigne</li>
            <li>Pinot Noir Vieilles Vignes</li>
            <li>Intchié No Rouge</li>
          </ul>
        </Text>
      </FlexRange>
      <FlexRange>
        <Image>
          <img src={wines4} alt='Les Ecrins' />
        </Image>
        <Text width={width}>
          <h3>Les Ecrins AOC Valais</h3>
          <ul>
            <li>Petite Arvine</li>
            <li>Païen/Heida</li>
            <li>Merlot</li>
            <li>Syrah</li>
            <li>Séléné</li>
            <li>Viyra</li>
          </ul>
        </Text>
      </FlexRange>
    </StyledRangeWines>
  )
}

export default RangeWines
