import React from 'react'
import PropTypes from 'prop-types'
import '../Styles.css'

// eslint-disable-next-line object-curly-newline
const Number = ({ value, setActualButton, setButtonClick, buttonClick }) => (
  <button type="button" className="numButton" onClick={() => { setActualButton(value); setButtonClick(!buttonClick) }} value={value}>
    {value}
  </button>
)

Number.propTypes = {
  setActualButton: PropTypes.func,
  setButtonClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  buttonClick: PropTypes.bool,
}

Number.defaultProps = {
  setButtonClick: () => {},
  setActualButton: () => {},
  buttonClick: false,
}

// eslint-disable-next-line object-curly-newline
const ButtonNumber = ({ number, setActualButton, buttonClick, setButtonClick }) => (
  <Number
    value={number}
    setActualButton={setActualButton}
    setButtonClick={setButtonClick}
    buttonClick={buttonClick}
  />
)

ButtonNumber.propTypes = {
  number: PropTypes.string.isRequired,
  setActualButton: PropTypes.func,
  buttonClick: PropTypes.bool,
  setButtonClick: PropTypes.func,
}

ButtonNumber.defaultProps = {
  setButtonClick: () => {},
  setActualButton: () => {},
  buttonClick: false,
}

export default ButtonNumber
