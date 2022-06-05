import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 85%;
  max-width: 1640px;
  margin: 0 auto;
  padding: 1.5rem 0;
`

export const WrapperFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 0.8rem;
  }

  @media screen and (max-width: 480px) {
    p {
      font-size: 1rem;
      line-height: 1.4;
    }
  }

  a {
    display: flex;
    align-self: center;
    font-size: 1.75rem;
    color: inherit;
  }
`
