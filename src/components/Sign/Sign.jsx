import React from 'react'
import PropTypes from 'prop-types'
import '../Styles.css'

const Sign = ({ setSign, value, calculate }) => (
  <button type="button" className="signButton" onClick={() => { calculate(); setSign(value) }} value={value}>
    {value}
  </button>
)

Sign.propTypes = {
  setSign: PropTypes.func,
  value: PropTypes.string.isRequired,
  calculate: PropTypes.func.isRequired,
}

Sign.defaultProps = {
  setSign: () => {},
}

const Equal = ({ calculate }) => (
  <button type="button" className="signButton" onClick={calculate} value="=">=</button>
)

Equal.propTypes = {
  calculate: PropTypes.func.isRequired,
}

// eslint-disable-next-line object-curly-newline
const ButtonSign = ({ sign, setSign, num1, num2, setTotal, equal }) => {
  const calculate = () => {
    if (num2 !== '') {
      let total
      if (sign === '+') {
        total = parseFloat(num1) + parseFloat(num2)
      } else if (sign === '-') {
        total = parseFloat(num1) - parseFloat(num2)
        if (parseFloat(total) < 0) {
          total = 'ERROR'
        }
      } else if (sign === '×') {
        total = parseFloat(num1) * parseFloat(num2)
      } else if (sign === '÷') {
        if (num2 === '' || num2 === '0') {
          total = 'ERROR'
        } else {
          total = parseFloat(num1) / parseFloat(num2)
        }
      }

      if (parseFloat(total) > 999999999) {
        total = 'ERROR'
      }

      if (total !== 'ERROR') {
        setTotal(String(total).substring(0, 8))
      } else {
        setTotal(total)
      }
    }
  }

  if (equal === '1') {
    return (
      <Equal calculate={calculate} />
    )
  }
  return (
    <Sign value={sign} setSign={setSign} calculate={calculate} />
  )
}

ButtonSign.propTypes = {
  sign: PropTypes.string.isRequired,
  setSign: PropTypes.func,
  num1: PropTypes.string,
  num2: PropTypes.string,
  setTotal: PropTypes.func,
  equal: PropTypes.string,
}

ButtonSign.defaultProps = {
  setSign: () => {},
  num1: '0',
  num2: '0',
  setTotal: () => {},
  equal: '',
}

export default ButtonSign
