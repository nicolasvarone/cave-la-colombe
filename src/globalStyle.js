import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* Variables */
  :root {
    --primary-color: #c69147;
    --light-color: #f7f5f0;
    --dark-color: #2e2a26;

    --title-font: 'linotype-sabon', sans-serif;
    --body-font: 'rustica', sans-serif;

    --padding-10: 10rem;
    --padding-7: 7rem;
    --padding-5: 5rem;
  }

  /* Global */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--light-color);
    font-family: var(--body-font);
    font-size: 1rem;
    font-weight: 200;
    color: var(--dark-color);
  }

  h1,
  h2,
  h3 {
    font-family: var(--title-font);
    font-weight: 400; 
  }

  h1 {
    font-size: 4rem;

    @media screen and (max-width: 768px) {
      font-size: 3.5rem;
    }
    
    @media screen and (max-width: 480px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 3.5rem;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2.75rem;
    }
  }

  h3 {
    font-size: 2.5rem;

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 2;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

/* Mixins */
export const WrapperLinkStyle = css`
  padding-block: var(--padding-10);
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-block: var(--padding-5);
  }
`

export const SecondTitleStyle = css`
  display: inline-block;
  margin-bottom: 3.5rem;
  padding-inline: 1rem 3rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-color);
  transform: translateX(-3rem);

  @media screen and (max-width: 1280px) {
    padding-left: 0;
    transform: translateX(0);
  }
`
