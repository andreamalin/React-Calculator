import React from 'react'
import { render } from '@testing-library/react'
import Display from './Display'

describe('Display tests', () => {
  test('Display renders correctly', () => {
    render(<Display value="0" />)
  })
  test('Display shows value correctly', () => {
    const value = '100'
    const display = render(<Display value={value} />)

    expect(display.getByText('100'))
  })
})
