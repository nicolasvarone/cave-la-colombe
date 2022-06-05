import styled from 'styled-components'
import { SecondTitleStyle, WrapperLinkStyle } from '../../globalStyle'

export const Text = styled.div`
  padding: var(--padding-7) 0 0;

  @media screen and (max-width: 768px) {
    padding: var(--padding-5) 0 0;
  }

  h2 {
    ${SecondTitleStyle}
  }

  p:not(:last-child) {
    margin-bottom: 1.4rem;
  }
`

export const MiddleImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 7rem auto 0;
  transform: translateX(-10rem);

  @media screen and (max-width: 1280px) {
    transform: translateX(0);
  }

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 12px 12px 0 1px var(--primary-color);
  }
`

export const WrapperButton = styled.div`
  ${WrapperLinkStyle}
`
