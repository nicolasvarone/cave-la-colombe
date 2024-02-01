import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const Modal = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  background: white;
  padding: 3rem;
  z-index: 1000;
  text-align: left;
  
  h3 {
    margin-left: -0.25rem;
    margin-bottom: 2rem;
    color: var(--dark-color);
    font-size: 2rem;

      @media screen and (max-width: 1024px) {
        font-size: 1.75rem;
      }
    }

    p {
      line-height: 1.7;
      margin-top: 0.25rem;

      &:not(:last-child) {
        margin-bottom: 1.25rem;
      }
    }

    span {
      font-family: var(--title-font);
      font-size: 1.375rem;
      font-weight: 400;
    }
`

export const Close = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;
  color: var(--dark-color);
`