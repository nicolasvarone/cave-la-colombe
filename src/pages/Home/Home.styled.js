import styled from 'styled-components'
import { WrapperLinkStyle } from '../../globalStyle'

export const Title = styled.div`
  padding: var(--padding-10) 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: var(--padding-5) 0;
  }

  span {
    padding-left: 8rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 1px;

    @media screen and (max-width: 1024px) {
      padding-left: 0;
    }
  }

  h1 {
    padding-bottom: 1.5rem;
    padding-left: 2.5rem;
    margin-right: 9.5rem;
    margin-bottom: 1.3rem;
    border-bottom: 2px solid var(--primary-color);

    @media screen and (max-width: 1024px) {
      padding-left: 0;
      margin-right: 0;
    }
  }

  p {
    padding-left: 5rem;

    @media screen and (max-width: 1024px) {
      padding-left: 0;
    }
  }
`

export const WrapperButton = styled.div`
  ${WrapperLinkStyle}
`
