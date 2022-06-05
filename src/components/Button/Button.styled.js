import styled from 'styled-components'

export const StyledButton = styled.button`
  display: inline-block;
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
`
