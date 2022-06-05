import styled from 'styled-components'
import { SecondTitleStyle } from '../../globalStyle'

export const Text = styled.div`
  padding: var(--padding-7) 0 var(--padding-10);

  @media screen and (max-width: 768px) {
    padding: var(--padding-5) 0 var(--padding-7);
  }

  h2 {
    ${SecondTitleStyle}
  }

  ul {
    margin-top: 2rem;
    padding-left: 1.5rem;
    list-style: disc;
  }

  li {
    font-size: 1.125rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    span {
      font-size: 1.125rem;
      font-weight: 400;
      color: var(--primary-color);
    }

    a {
      color: inherit;
      text-decoration: underline;
    }
  }
`
