import styled from 'styled-components'
import theme from '../../styles/theme'
import { FiChevronDown } from 'react-icons/fi'

export const Container = styled.header`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;

  border-bottom: 0.5px solid ${theme.colors.mutedBorderColor};
`

export const LogoContainer = styled.div``

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  justify-content: space-between;
`

export const NavBarItem = styled.li`
  font-size: 18px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.blackColor};
  font-weight: bold;
  cursor: pointer;
`

export const NavBarItemText = styled.p`
  padding: 20px 10px;
  &:hover {
    border-bottom: 1px solid ${theme.colors.mutedBorderColor};
  }
`
export const Logo = styled.p`
  font-size: 20px;
  color: ${theme.colors.blackColor};
`

export const DropIcon = styled(FiChevronDown)`
  font-size: 24px;
  color: ${theme.colors.blackColor};
`
