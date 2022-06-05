import styled from 'styled-components'
import { SecondTitleStyle, WrapperLinkStyle } from '../../globalStyle'

export const Text = styled.div`
  padding: var(--padding-7) 0 0;

  @media screen and (max-width: 768px) {
    padding: var(--padding-5) 0 3rem;
  }

  h2 {
    ${SecondTitleStyle}
  }

  p {
    margin-bottom: 1.4rem;
  }
`

export const WrapperLink = styled.div`
  padding-block: var(--padding-5);
  display: flex;
  justify-content: center;

  a {
    font-size: 1.125rem;
    color: inherit;
    text-align: center;
    text-decoration: underline;
  }
`

export const WrapperButton = styled.div`
  ${WrapperLinkStyle}
`
