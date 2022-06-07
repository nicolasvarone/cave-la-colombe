import styled from 'styled-components'

export const StyledContact = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: var(--padding-10);

  @media screen and (max-width: 1280px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: var(--padding-7);
  }
`

export const FlexContact = styled.div`
  padding: 3rem;
  border: 1px solid var(--dark-color);
  display: flex;
  box-shadow: 12px 12px 0 1px var(--primary-color);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 3rem;
  }
`

export const Left = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  h3 {
    margin-left: -0.25rem;
    margin-bottom: 1.25rem;

    @media screen and (max-width: 1024px) {
      font-size: 2rem;
    }
  }

  p {
    line-height: 1.7;

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

export const Right = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  form {
    label {
      display: block;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      font-family: var(--body-font);
      font-size: 1rem;
      font-weight: 200;
      margin-bottom: 1rem;
    }

    textarea {
      width: 100%;
      height: 10rem;
      padding: 0.5rem;
      font-family: var(--body-font);
      font-size: 1rem;
      font-weight: 200;
      margin-bottom: 1rem;
    }

    button {
      display: block;
      width: auto;
      margin-top: 0.375rem;
      padding: 0.875rem 2rem;
      background-color: var(--primary-color);
      font-family: var(--title-font);
      font-size: 1.375rem;
      font-weight: 400;
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.05);
      }

      @media screen and (max-width: 768px) {
        margin-inline: auto;
      }
    }
  }
`
