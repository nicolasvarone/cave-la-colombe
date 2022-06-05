import styled from 'styled-components'

export const StyledRangeWines = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: var(--padding-7) 0 0;

  @media screen and (max-width: 1280px) {
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const FlexRange = styled.div`
  display: flex;
  justify-content: ${({ flexStart }) =>
    flexStart ? 'flex-start' : 'flex-end'};

  &:not(:last-child) {
    margin-bottom: 10rem;
  }

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }
`

export const Image = styled.div`
  width: 35%;
  height: 100%;
  margin-right: 4rem;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 12px 12px 0 1px var(--primary-color);
  }
`

export const Text = styled.div`
  width: ${({ width }) => (width ? '20%' : 'auto')};

  @media screen and (max-width: 1280px) {
    width: ${({ width }) => (width ? '25%' : 'auto')};
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
  }

  ul {
    list-style: disc;
    padding-left: 1.5rem;
  }

  li {
    font-size: 1.375rem;
    line-height: 1.8;

    @media screen and (max-width: 480px) {
      font-size: 1.125rem;
    }

    &::marker {
      font-size: 1rem;
    }
  }
`
