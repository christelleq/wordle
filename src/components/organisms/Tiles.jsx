import React from 'react'
import TileRow from '../molecules/TileRow'

export default function Tiles({ rows }) {
  return (
    <>
      {rows.map((row) => (
        <div className="flex justify-center">
          <TileRow letters={row} />
        </div>
      ))}
    </>
  )
}
