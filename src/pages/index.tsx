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

const Home: React.FC = () => {
  const characters = [
    {
      id: 0,
      name: 'Diluc',
      element: 'fire',
      imgUrl:
        'https://uploadstatic-sea.mihoyo.com/contentweb/20200609/2020060915105012670.png'
    },
    {
      id: 4,
      name: 'Venti',
      element: 'anemo',
      imgUrl:
        'https://uploadstatic-sea.mihoyo.com/contentweb/20191122/2019112211143037621.png'
    },
    {
      id: 5,
      name: 'Barbara',
      element: 'water',
      imgUrl:
        'https://uploadstatic-sea.mihoyo.com/contentweb/20200609/2020060915102571828.png'
    },
    {
      id: 7,
      name: 'Lisa',
      element: 'eletric',
      imgUrl:
        'https://uploadstatic-sea.mihoyo.com/contentweb/20191009/2019100915323235059.png'
    }
  ]

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
    characters
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
      const newCharacterList = Object.assign([], shuffle(characterList))
      setCharacterList(newCharacterList)
    }
  }
  useEffect(() => {
    document.addEventListener('keypress', onSpacePressed)
  }, [])

  const colorsByElement = {
    fire: '#A92523',
    water: '#6BB9C7',
    anemo: '#0B6E4F',
    eletric: '#736CED',
    ice: '#cdfff9',
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
        {characterList.map(({ name, id, element, imgUrl }) => (
          <CharacterCard
            key={id}
            characterName={name}
            color={colorsByElement[element]}
            imgUrl={imgUrl}
          />
        ))}
      </CharacterContainer>
    </Container>
  )
}

export default Home
