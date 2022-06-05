import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledHeader = styled.header`
  position: ${({ position }) =>
    position === 'absolute' ? 'absolute' : 'relative'};
  right: 0;
  left: 0;
  transition: all 0.5s ease-out; // A AMELIORER
  z-index: 1;
`

export const Nav = styled.nav`
  width: 85%;
  max-width: 1640px;
  margin: 0 auto;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LinkLogo = styled(NavLink)``

export const Logo = styled.img`
  width: 200px;
  height: auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 175px;
  }
`

export const Menu = styled.ul`
  display: flex;
  column-gap: 6rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const Item = styled.li`
  position: relative;
  padding: 0.375rem;
`

export const LinkItem = styled(NavLink)`
  font-size: 0.9375rem;
  color: ${({ color }) =>
    color === 'light' ? 'var(--light-color)' : 'var(--dark-color)'};
  text-transform: uppercase;

  &:after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 2px solid var(--primary-color);
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  &.active:after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid var(--primary-color);
    transform: scaleX(1);
  }
`

export const HamburgerIcon = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const NavMobile = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 100vh;
`

export const MenuMobile = styled.ul`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
`

export const ItemMobile = styled.li`
  width: 70%;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 0.5px 0 var(--dark-color);
`

export const LinkItemMobile = styled(NavLink)`
  color: var(--dark-color);
  font-size: 1.5rem;
  text-transform: uppercase;

  &.active {
    color: var(--primary-color);
  }
`
