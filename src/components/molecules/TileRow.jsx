import React from 'react'
import Tile from '../atoms/Tile'

export default function TileRow({ letters }) {
  return (
    <>
      <ol className="flex flex-row">
        {letters.map((letter, index) => (
          <li key={index}>
            <Tile letter={letter} />
          </li>
        ))}
      </ol>
    </>
  )
}
