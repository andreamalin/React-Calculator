import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ButtonNumber from './Number'

describe('Button Number tests', () => {
  test('Number renders correctly', () => {
    render(<ButtonNumber number="1" />)
  })
  test('Click number 1 button returns 1', () => {
    const actualButton = ({ actualNumberButton }) => actualNumberButton

    const buttonOne = render(<ButtonNumber number="1" setActualButton={actualButton} />) // Number button

    userEvent.click(buttonOne.getByText('1'))
    expect(actualButton === '1')
  })
})
