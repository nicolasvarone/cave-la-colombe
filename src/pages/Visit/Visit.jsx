import Header from "../../components/Header/Header";
import TopImage from "../../components/TopImage/TopImage";
import visit2 from "../../images/visit2.jpg";
import {
  Container,
  ContainerSmall,
} from "../../components/Container/Container.styled";
import { Text } from "./Visit.styled";
import Contact from "../../components/Contact/Contact";

const Visit = () => {
  return (
    <>
      <Header />
      <TopImage src={visit2} alt="Bateau" />
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
                <span>Lausanne:</span> Wyschiff (les 20 et 21 novembre 2026
                à l'hôtel Mövenpick,{" "}
                <a
                  href="https://www.wyschiff.ch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
              <li>
                <span>Conthey:</span> Caves ouvertes de l'Avent (le vendredi 4
                décembre de 16h à 20h et le samedi 5 décembre 2026 de 11h à
                18h)
              </li>
              <li>
                <span>Bâle:</span> Wyschiff (du 4 au 7 mars 2027,{" "}
                <a
                  href="https://www.wyschiff.ch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
              <li>
                <span>Lucerne:</span> Wyschiff (du 18 au 21 mars 2027,{" "}
                <a
                  href="https://www.wyschiff.ch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
              <li>
                <span>Conthey:</span> Caves ouvertes des vins du Valais (du 6
                au 8 mai 2027)
              </li>
            </ul>
          </Text>
        </ContainerSmall>
        <Contact />
      </Container>
    </>
  );
};

export default Visit;
