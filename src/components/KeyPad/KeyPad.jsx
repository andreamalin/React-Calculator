import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ButtonSign from '../Sign/Sign'
import ButtonNumber from '../Number/Number'
import '../Styles.css'

const KeyPad = ({ setDisplay }) => {
  const [actualButton, setActualButton] = useState('')
  const [buttonClick, setButtonClick] = useState(true)
  const [sign, setSign] = useState('')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [total, setTotal] = useState('')

  const getNum = () => {
    if (sign === '') {
      if (num1.length < 9) {
        setNum1(String(num1 + actualButton))
        setDisplay(String(num1 + actualButton))
      }
    } else if (num2.length < 9) {
      setNum2(String(num2 + actualButton))
      setDisplay(String(num2 + actualButton))
    }
  }

  useEffect(() => {
    getNum()
  }, [buttonClick])

  useEffect(() => {
    setDisplay(String(total))
    if (total === 'ERROR') {
      setNum1('')
      setSign('')
    } else {
      setNum1(String(total))
    }
    setNum2('')
  }, [total])

  return (
    <div className="keyPad">
      <div className="row">
        <ButtonNumber number="7" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonNumber number="8" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonNumber number="9" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonSign sign="÷" setSign={setSign} num1={num1} num2={num2} setTotal={setTotal} />
      </div>
      <div className="row">
        <ButtonNumber number="4" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonNumber number="5" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonNumber number="6" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonSign sign="×" setSign={setSign} num1={num1} num2={num2} setTotal={setTotal} />
      </div>
      <div className="row">
        <ButtonNumber number="1" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonNumber number="2" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonNumber number="3" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonSign sign="+" setSign={setSign} num1={num1} num2={num2} setTotal={setTotal} />
      </div>

      <div className="row">
        <ButtonNumber number="0" setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonNumber number="." setActualButton={setActualButton} setButtonClick={setButtonClick} buttonClick={buttonClick} />
        <ButtonSign sign={sign} num1={num1} num2={num2} setTotal={setTotal} equal="1" />
        <ButtonSign sign="-" setSign={setSign} num1={num1} num2={num2} setTotal={setTotal} />
      </div>
    </div>
  )
}

KeyPad.propTypes = {
  setDisplay: PropTypes.func,
}

KeyPad.defaultProps = {
  setDisplay: () => {},
}

export default KeyPad
