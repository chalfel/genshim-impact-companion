import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'
import {
  CharacterContainer,
  CommandBar,
  CommandBarItem,
  CommandBarOptions,
  CommandBarText,
  Container
} from '../styles/pages/TeamGenerator'
import { FiTrash, FiSave, FiShare2, FiArrowRightCircle } from 'react-icons/fi'
import { ICharacter } from '../interfaces/characters'
import CharactersData from '../data/CharactersData'

const TeamGenerator: React.FC = () => {
  const options = [
    {
      name: 'delete',
      Icon: FiTrash,
      onClick: () => console.log('eae')
    },
    {
      name: 'save',
      Icon: FiSave,
      onClick: () => console.log('eae')
    },
    {
      name: 'share',
      Icon: FiShare2,
      onClick: () => console.log('eae')
    },
    {
      name: 'continue',
      Icon: FiArrowRightCircle,
      onClick: () => console.log('eae')
    }
  ]

  const [characterList, setCharacterList] = useState<Array<ICharacter>>(
    CharactersData.slice(0, 4)
  )

  const shuffle = array => {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  const onSpacePressed = (e: KeyboardEvent) => {
    const { code } = e
    if (code === 'Space') {
      const newCharacterList = Object.assign([], shuffle(CharactersData))
      setCharacterList(newCharacterList.slice(0, 4))
    }
  }
  useEffect(() => {
    document.addEventListener('keypress', onSpacePressed)
  }, [])

  const colorsByElement = {
    pyro: '#A92523',
    hydro: '#6BB9C7',
    anemo: '#0B6E4F',
    electro: '#736CED',
    cryo: '#cdfff9',
    geo: '#fa9f42'
  }
  return (
    <Container>
      <Header />
      <CommandBar>
        <CommandBarText>Press space to change character</CommandBarText>
        <CommandBarOptions>
          {options.map(({ name, Icon, onClick }) => (
            <CommandBarItem onClick={onClick} key={name}>
              <Icon />
            </CommandBarItem>
          ))}
        </CommandBarOptions>
      </CommandBar>
      <CharacterContainer>
        {characterList.map(({ name, id, element, imgUrl, characterLocked }) => (
          <CharacterCard
            key={id}
            characterName={name}
            color={colorsByElement[element]}
            imgUrl={imgUrl}
            characterLocked={characterLocked}
          />
        ))}
      </CharacterContainer>
    </Container>
  )
}

export default TeamGenerator
