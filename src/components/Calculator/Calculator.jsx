import React, { useState } from 'react'
import KeyPad from '../KeyPad/KeyPad'
import Display from '../Display/Display'
import '../Styles.css'

const Calculator = () => {
  const [display, setDisplay] = useState('')

  return (
    <div className="calculator">
      <Display value={display} />
      <KeyPad setDisplay={setDisplay} />
    </div>
  )
}

export default Calculator
