import styled from 'styled-components'

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
  @media (max-width: 1000px) {
    flex-direction: row;
    width: 100%;
  }
`

interface OptionContainerProps {
  enabled: boolean
}

export const CharacterName = styled.p<OptionContainerProps>`
  display: ${({ enabled }) => (enabled ? 'block' : 'none')};
  font-size: 28px;
  position: absolute;
  bottom: 50px;
  z-index: 99999;
  color: #fff;
  @media (max-width: 1000px) {
    left: 60px;
    bottom: 50%;
    transform: translateY(50%);
    font-size: 40px;
  }
  @media (max-width: 800px) {
    left: 10%;
    top: 10%;
    bottom: 100%;
    font-size: 28px;
  }
`

export const CharacterImage = styled.img`
  margin-right: 100px;
  width: 400px;
  @media (max-width: 1000px) {
    transform: translateY(30%);
    margin-left: 20%;
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 400px;
    position: absolute;
    margin: 0;
    right: 0;
  }
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

  @media (max-width: 1000px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 95%
    );
  }
`

export const OptionList = styled.ul`
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 150px;
  @media (max-width: 1000px) {
    flex-direction: row;
    height: 100%;
    margin-bottom: 0;
    width: 300px;
    margin-right: 100px;
  }
  @media (max-width: 800px) {
    width: 200px;
  }
`
export const OptionItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 28px;
  display: flex;
  @media (max-width: 1000px) {
    font-size: 36px;
  }

  @media (max-width: 800px) {
    font-size: 28px;
  }
`
