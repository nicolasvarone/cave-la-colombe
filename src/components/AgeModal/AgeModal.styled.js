import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  padding: 1.5rem;
  background-color: rgba(46, 42, 38, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal = styled.div`
  width: 100%;
  max-width: 42rem;
  padding: 3rem;
  background-color: var(--light-color);
  border: 1px solid var(--dark-color);
  box-shadow: 12px 12px 0 1px var(--primary-color);
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 2rem 1.5rem;
    box-shadow: 8px 8px 0 1px var(--primary-color);
  }
`

export const Logo = styled.img`
  width: 16rem;
  margin: 0 auto 2.5rem;

  @media screen and (max-width: 768px) {
    width: 12rem;
    margin-bottom: 2rem;
  }
`

export const Text = styled.p`
  margin-bottom: 2.5rem;
  line-height: 1.7;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

export const Action = styled.button`
  padding: 0.875rem 2rem;
  background-color: ${({ variant }) =>
    variant === 'secondary' ? 'transparent' : 'var(--primary-color)'};
  font-family: var(--title-font);
  font-size: 1.375rem;
  font-weight: 400;
  color: ${({ variant }) =>
    variant === 'secondary' ? 'var(--dark-color)' : 'white'};
  border: ${({ variant }) =>
    variant === 'secondary' ? '1px solid var(--dark-color)' : 'none'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
