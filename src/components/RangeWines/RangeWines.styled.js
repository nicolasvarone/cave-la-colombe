import styled from "styled-components";

export const StyledRangeWines = styled.div`
  display: flex;
  column-gap: 4rem;
  margin: 0 auto;
  padding: var(--padding-7) 0 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const ImagesColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  width: 30%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.div`
  width: 100%;
  margin-right: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 12px 12px 0 1px var(--primary-color);
  }
`;

export const Text = styled.div`
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

  span {
    font-size: 1.125rem;
    margin-left: 1rem;
    white-space: nowrap;
  }
`;
