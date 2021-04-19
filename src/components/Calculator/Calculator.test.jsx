import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from './Calculator'

describe('Calculator tests', () => {
  test('Renders correctly', () => {
    render(<Calculator />)
  })
  test('On click = Calculator sum returns result correctly', () => {
    const calculator = render(<Calculator />) // Calculator

    userEvent.click(calculator.getByText('1'))
    userEvent.click(calculator.getByText('3'))
    userEvent.click(calculator.getByText('+'))
    userEvent.click(calculator.getByText('1'))
    userEvent.click(calculator.getByText('0'))
    userEvent.click(calculator.getByText('='))

    expect(calculator.getByText('23'))
  })
  test('On click - calculator returns result correctly of past operation', () => {
    const calculator = render(<Calculator />) // Calculator

    userEvent.click(calculator.getByText('9'))
    userEvent.click(calculator.getByText('5'))
    userEvent.click(calculator.getByText('-'))
    userEvent.click(calculator.getByText('4'))
    userEvent.click(calculator.getByText('-'))

    expect(calculator.getByText('91'))
  })
  test('10th number click is ignored', () => {
    const calculator = render(<Calculator />) // Calculator

    userEvent.click(calculator.getByText('9')) // 1 number
    userEvent.click(calculator.getByText('5')) // 2 numbers
    userEvent.click(calculator.getByText('1')) // 3 numbers
    userEvent.click(calculator.getByText('2')) // 4 numbers
    userEvent.click(calculator.getByText('3')) // 5 numbers
    userEvent.click(calculator.getByText('0')) // 6 numbers
    userEvent.click(calculator.getByText('0')) // 7 numbers
    userEvent.click(calculator.getByText('4')) // 8 numbers
    userEvent.click(calculator.getByText('2')) // 9 numbers
    userEvent.click(calculator.getByText('1')) // 10 numbers

    expect(calculator.getByText('951230042')) // 10th is ignored
  })
})
