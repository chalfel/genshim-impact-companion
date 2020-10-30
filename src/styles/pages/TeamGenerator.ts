import styled from 'styled-components'
import theme from '../theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80vh;
  margin: 0 auto;
`

export const CommandBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 60px;
  border-bottom: 0.5px solid ${theme.colors.mutedBorderColor};
`

export const CommandBarText = styled.p`
  font-size: 18px;
  color: ${theme.colors.mutedTextColor};
`

export const CommandBarOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CommandBarItem = styled.li`
  color: ${theme.colors.blackColor};
  font-size: 28px;
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
`
