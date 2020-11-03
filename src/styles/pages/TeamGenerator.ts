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
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const CommandBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 60px;
  border-bottom: 0.5px solid ${theme.colors.mutedBorderColor};
  @media (max-width: 800px) {
    height: 80px;
  }
`

export const CommandBarText = styled.p`
  font-size: 18px;
  color: ${theme.colors.mutedTextColor};
  @media (max-width: 1000px) {
    font-size: 24px;
  }
  @media (max-width: 800px) {
    text-align: center;
    font-size: 20px;
  }
`

export const CommandBarOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`

export const CommandBarItem = styled.li`
  color: ${theme.colors.blackColor};
  font-size: 28px;
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    font-size: 34px;
  }
`
