import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import KeyPad from './KeyPad'

describe('KeyPad tests', () => {
  test('KeyPad renders correctly', () => {
    render(<KeyPad />)
  })
  test('KeyPad shows numbers buttons correctly', () => {
    const keypad = render(<KeyPad />)
    userEvent.click(keypad.getByText('1'))
    userEvent.click(keypad.getByText('5'))
    userEvent.click(keypad.getByText('9'))
    userEvent.click(keypad.getByText('.'))
  })
  test('KeyPad shows sign buttons correctly', () => {
    const keypad = render(<KeyPad />)
    userEvent.click(keypad.getByText('+'))
    userEvent.click(keypad.getByText('-'))
    userEvent.click(keypad.getByText('='))
  })
})
