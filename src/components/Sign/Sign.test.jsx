import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ButtonSign from './Sign'

describe('Button Sign tests', () => {
  test('Sign renders correctly', () => {
    render(<ButtonSign sign="1" />)
  })
  test('Click = button returns two numbers sum', () => {
    const total = ({ actualTotal }) => actualTotal

    render(<ButtonSign sign="+" num1="1" num2="2" setTotal={total} />) // Sum operation
    const buttonEquals = render(<ButtonSign sign="+" equal="1" />) // Equal button

    userEvent.click(buttonEquals.getByText('='))
    expect(total === '3')
  })
  test('Click = button returns error in negative result of rest', () => {
    const total = ({ actualTotal }) => actualTotal

    render(<ButtonSign sign="-" num1="3" num2="5" setTotal={total} />) // Rest operation
    const buttonEquals = render(<ButtonSign sign="-" equal="1" />) // Equal button

    userEvent.click(buttonEquals.getByText('='))
    expect(total === 'ERROR')
  })
  test('Click = button on sum bigger than 999999999 throws error', () => {
    const total = ({ actualTotal }) => actualTotal

    render(<ButtonSign sign="-" num1="999999999" num2="1" setTotal={total} />) // Sum operation
    const buttonEquals = render(<ButtonSign sign="+" equal="1" />) // Equal button

    userEvent.click(buttonEquals.getByText('='))
    expect(total === 'ERROR')
  })
})
