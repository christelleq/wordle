import React from 'react'
import Title from '../atoms/Title'
import Tiles from '../organisms/Tiles'
import Keyboard from '../organisms/Keyboard'

export default function GamePage() {
  return (
    <>
      <Title />
      <Tiles
        rows={[
          ['h', 'e', 'l', 'l', 'o'],
          ['h', 'e', 'l', 'l', 'o'],
          ['h', 'e', 'l', 'l', 'o'],
          ['h', 'e', 'l', 'l', 'o'],
          ['h', 'e', 'l', 'l', 'o'],
        ]}
      />
      <Keyboard />
    </>
  )
}
