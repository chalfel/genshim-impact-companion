import styled from 'styled-components'
import theme from '../../styles/theme'

interface ContainerProps {
  color: string
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 250px;
  background: ${({ color }) => color};

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`

interface OptionContainerProps {
  enabled: boolean
}

export const CharacterName = styled.p<OptionContainerProps>`
  display: ${({ enabled }) => (enabled ? 'block' : 'none')};
  font-size: 28px;
  position: absolute;
  top: 50px;
  z-index: 99999;
  /* color: ${theme.colors.text}; */
  color: #fff;
`

export const CharacterImage = styled.img`
  margin-right: 400px;
`
export const OptionsContainer = styled.div<OptionContainerProps>`
  display: ${({ enabled }) => (enabled ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 75%
  );
`

export const OptionList = styled.ul`
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 150px;
`
export const OptionItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 28px;
`
