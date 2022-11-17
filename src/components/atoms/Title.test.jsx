import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import Title from './Title'

test('title renders', () => {
  const title = render(<Title />)
  expect(title).toMatchSnapshot()
})
