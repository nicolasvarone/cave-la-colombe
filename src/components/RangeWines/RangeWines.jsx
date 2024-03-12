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
          <h3>Les vins blancs</h3>
          <ul>
            <li>Conthey «Vieilles Vignes» (Fendant)</li>
            <li>Tricrètes «Vieilles Vignes» (Fendant)</li>
            <li>Johannisberg «Privilège»</li>
            <li>Petite Arvine «Finesse»</li>
            <li>Païen/Heida «Les Ecrins»</li>
          </ul>
          <h3 style={{marginTop: '2rem'}}>Les vins rosés</h3>
          <ul>
            <li>Dôle blanche «Intchié No» (Pinot Noir et Gamay)</li>
            <li>Versus (Pinot Noir et Gamay)</li>
            <li>Paloma (Merlot)</li>
          </ul>
        </Text>
      </FlexRange>
      <FlexRange>
        <Image>
          <img src={wines4} alt='Les Ecrins' />
        </Image>
        <Text width={width}>
          <h3>Les vins rouges</h3>
          <ul>
            <li>Dôle «Intchié No»</li>
            <li>Pinot Noir «Vieilles Vignes»</li>
            <li>Merlot «Les Ecrins»</li>
            <li>Virya (Cabernet Franc)</li>
            <li>Séléné (Diolinoir et Syrah)</li>
            <li>Syrah «Les Rayes»</li>
          </ul>
        </Text>
      </FlexRange>
    </StyledRangeWines>
  )
}

export default RangeWines
