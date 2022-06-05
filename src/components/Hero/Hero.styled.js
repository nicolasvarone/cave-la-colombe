import styled from 'styled-components'

export const StyledHero = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0) 70%,
      rgba(51, 51, 51, 0.7)
    );
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
