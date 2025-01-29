import Header from "../../components/Header/Header";
import TopImage from "../../components/TopImage/TopImage";
import wines2 from "../../images/wines2.jpg";
import {
  Container,
  ContainerSmall,
} from "../../components/Container/Container.styled";
import { Text, WrapperLink, WrapperButton } from "./Wines.styled";
import RangeWines from "../../components/RangeWines/RangeWines";
import List from "../../images/liste-des-vins-2025.pdf";
import Button from "../../components/Button/Button";

const Wines = () => {
  return (
    <>
      <Header />
      <TopImage src={wines2} alt="Vin rouge" />
      <Container>
        <ContainerSmall>
          <Text>
            <h2>Notre gamme des vins</h2>
            <p>
              C'est avec la patience des paysans, la rigueur des artisans et le
              soin des passionnés, que chaque année nous vinifions les
              splendides vendanges que nous offre ce coin des Alpes. Nous vous
              proposons des vins d'exception, produits en quantités
              confidentielles, qui sont le reflet authentique de notre terroir
              et de notre savoir-faire.
            </p>
            <WrapperLink>
              <a href={List} target="_blank" rel="noreferrer">
                Commandez par email en téléchargeant notre liste des vins
              </a>
            </WrapperLink>
          </Text>
        </ContainerSmall>
      </Container>
      <RangeWines />
      <Container>
        <WrapperButton>
          <Button as="a" href="/visite" text="Contactez-nous" />
        </WrapperButton>
      </Container>
    </>
  );
};

export default Wines;
