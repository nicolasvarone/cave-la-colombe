import styled, { createGlobalStyle } from 'styled-components'
import { Container } from '../../components/Container/Container.styled'
import { SecondTitleStyle } from '../../globalStyle'

// Only mounted on this page: lays the app out as a full-height column so the
// content below can take exactly the space left between header and footer,
// keeping the footer at the bottom of the screen without making the page scroll.
export const FullHeightLayout = createGlobalStyle`
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

export const Main = styled(Container)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.div`
  padding: var(--padding-5) 0;
  text-align: center;

  h2 {
    ${SecondTitleStyle}
    padding-inline: 1rem;
    transform: none;
  }
`

export const Code = styled.p`
  font-family: var(--title-font);
  font-size: 8rem;
  line-height: 1;
  color: var(--primary-color);
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 6rem;
  }
`

export const WrapperButton = styled.div`
  margin-top: 3rem;
`
