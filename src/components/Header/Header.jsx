import { useState, useEffect } from 'react'
import {
  StyledHeader,
  Nav,
  LinkLogo,
  Logo,
  Menu,
  Item,
  LinkItem,
  HamburgerIcon,
  NavMobile,
  MenuMobile,
  ItemMobile,
  LinkItemMobile,
} from './Header.styled'
import logo from '../../images/logo.svg'
import Hamburger from 'hamburger-react'

const Header = ({ position, color }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const body = document.querySelector('body')
    const header = document.querySelector('header')

    if (isOpen === true) {
      body.style.overflow = 'hidden'
      header.style.backgroundColor = 'var(--light-color)'
    } else {
      body.style.overflow = 'unset'
      header.style.backgroundColor = 'transparent'
    }
  }, [isOpen])

  return (
    <StyledHeader position={position}>
      <Nav>
        <LinkLogo to='/' onClick={() => closeMenu()}>
          <Logo src={logo} alt='Logo cave la colombe' />
        </LinkLogo>
        <Menu>
          <Item>
            <LinkItem to='/domaine' color={color}>
              Domaine
            </LinkItem>
          </Item>
          <Item>
            <LinkItem to='/vins' color={color}>
              Vins
            </LinkItem>
          </Item>
          <Item>
            <LinkItem to='/visite' color={color}>
              Visite/Contact
            </LinkItem>
          </Item>
        </Menu>
        <HamburgerIcon>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={30}
            distance='sm'
            color='#2e2a26'
          />
        </HamburgerIcon>
      </Nav>

      {isOpen && (
        <NavMobile>
          <MenuMobile>
            <ItemMobile>
              <LinkItemMobile to='/' onClick={() => closeMenu()} color={color}>
                Accueil
              </LinkItemMobile>
            </ItemMobile>
            <ItemMobile>
              <LinkItemMobile
                to='/domaine'
                onClick={() => closeMenu()}
                color={color}
              >
                Domaine
              </LinkItemMobile>
            </ItemMobile>
            <ItemMobile>
              <LinkItemMobile
                to='/vins'
                onClick={() => closeMenu()}
                color={color}
              >
                Vins
              </LinkItemMobile>
            </ItemMobile>
            <ItemMobile>
              <LinkItemMobile
                to='/visite'
                onClick={() => closeMenu()}
                color={color}
              >
                Visite/Contact
              </LinkItemMobile>
            </ItemMobile>
          </MenuMobile>
        </NavMobile>
      )}
    </StyledHeader>
  )
}
export default Header
