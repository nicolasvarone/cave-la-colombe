import {
  StyledRangeWines,
  ImagesColumn,
  Image,
  Text,
} from "./RangeWines.styled";
import wines3 from "../../images/wines3.jpg";
import wines4 from "../../images/wines4.jpg";
import {
  Container,
  ContainerSmall,
} from "../../components/Container/Container.styled";

const RangeWines = (flexStart, width) => {
  return (
    <Container>
      <ContainerSmall>
        <StyledRangeWines>
          <ImagesColumn>
            <Image>
              <img src={wines3} alt="Conthey" />
            </Image>
            <Image>
              <img src={wines4} alt="Les Ecrins" />
            </Image>
          </ImagesColumn>
          <Text>
            <h3>Les vins blancs</h3>
            <ul>
              <li>
                Conthey «Vieilles Vignes» (Fendant)<span>13,50 CHF</span>
              </li>
              <li>
                Tricrètes «Vieilles Vignes» (Fendant)<span>14,00 CHF</span>
              </li>
              <li>
                Johannisberg «Privilège»<span>17,00 CHF</span>
              </li>
              <li>
                Petite Arvine «Finesse»<span>20,00 CHF</span>
              </li>
              <li>
                Païen/Heida «Les Ecrins»<span>23,00 CHF</span>
              </li>
            </ul>
            <h3 style={{ marginTop: "2rem" }}>Les vins rosés</h3>
            <ul>
              <li>
                Dôle blanche «Intchié No» (Pinot Noir et Gamay)
                <span>16,00 CHF</span>
              </li>
              <li>
                Versus (Pinot Noir et Gamay)<span>16,00 CHF</span>
              </li>
              <li>
                Paloma (Merlot)<span>16,00 CHF</span>
              </li>
            </ul>
            <h3 style={{ marginTop: "2rem" }}>Les vins rouges</h3>
            <ul>
              <li>
                Dôle «Intchié No»<span>16,00 CHF</span>
              </li>
              <li>
                Pinot Noir «Vieilles Vignes»<span>17,00 CHF</span>
              </li>
              <li>
                Merlot «Les Ecrins»<span>23,00 CHF</span>
              </li>
              <li>
                Virya (Cabernet Franc)<span>23,00 CHF</span>
              </li>
              <li>
                Séléné (Diolinoir et Syrah)<span>25,00 CHF</span>
              </li>
              <li>
                Syrah «Les Rayes»<span>27,00 CHF</span>
              </li>
            </ul>
          </Text>
        </StyledRangeWines>
      </ContainerSmall>
    </Container>
  );
};

export default RangeWines;
