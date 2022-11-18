import React from 'react'

export default function Tile({ letter }) {
  console.log(letter)
  return (
    <>
      <div className="w-12 h-12 border m-1 text-center">
        <span className="font-serif text-3xl font-bold leading-12">
          {letter.toUpperCase()}
        </span>
      </div>
    </>
  )
}
