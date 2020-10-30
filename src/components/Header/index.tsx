import React from 'react'

import {
  Container,
  DropIcon,
  Logo,
  LogoContainer,
  NavBar,
  NavBarItem,
  NavBarItemText
} from './styles'
const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>PAIMON HELPER</Logo>
      </LogoContainer>
      <NavBar>
        <NavBarItem>
          <NavBarItemText>Home</NavBarItemText>
        </NavBarItem>
        <NavBarItem>
          <NavBarItemText>Tools</NavBarItemText>
          <DropIcon />
        </NavBarItem>
        <NavBarItem>
          <NavBarItemText>About</NavBarItemText>
        </NavBarItem>
      </NavBar>
    </Container>
  )
}

export default Header
