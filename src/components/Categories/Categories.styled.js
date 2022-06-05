import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledCategories = styled.div`
  width: 100%;
  height: 100%;
`

export const FlexCategories = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 1280px) {
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 4rem;
  }
`

export const Categorie = styled(Link)`
  width: 30%;
  height: auto;
  padding: 0.75rem;

  @media screen and (max-width: 1280px) {
    width: 40%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: 35vh;
  }

  @media screen and (max-width: 768px) {
    height: 30vh;
  }

  @media screen and (max-width: 480px) {
    height: 27.5vh;
  }
`

export const Foreground = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;

  &:hover {
    transform: translate(-0.75rem, -0.75rem);

    @media screen and (max-width: 1024px) {
      transform: none;
    }
  }

  h2 {
    z-index: 1;
    position: absolute;
    top: 2rem;
    left: 3rem;
    font-size: 2.5rem;
    color: var(--light-color);
    padding-bottom: 0.25rem;
    border-bottom: 2px solid var(--primary-color);
  }

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0) 30%,
      rgba(51, 51, 51, 0.7)
    );

    @media screen and (max-width: 768px) {
      background: linear-gradient(
        0deg,
        rgba(51, 51, 51, 0) 30%,
        rgba(51, 51, 51, 0.7)
      );
    }
  }

  img {
    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  z-index: -1;
`
